import { EntityManager, EntityRepository, Populate } from '@mikro-orm/postgresql';
import { Paginated } from '../classes/paginated';
import { NotFoundException } from '@nestjs/common';

export abstract class BaseService<TEntity extends { id: string }> {
  protected constructor(
    protected readonly entityRepository: EntityRepository<TEntity>,
    private readonly em: EntityManager
  ) {}

  public async readAllPaginatedAsync(
    page: number,
    size: number,
    populate: Populate<TEntity, string> = []
  ): Promise<Paginated<TEntity>> {
    const offset = (page - 1) * size;

    const [results, total] = await this.entityRepository.findAndCount(
      {},
      {
        limit: size,
        offset,
        populate,
      }
    );

    return {
      items: results,
      page,
      size,
      total,
    };
  }

  public async readAllAsync(populate: Populate<TEntity, string> = []): Promise<TEntity[]> {
    return await this.entityRepository.findAll({ populate });
  }

  public async readByIdAsync(
    id: string,
    populate: Populate<{ id: string }, string> = []
  ): Promise<TEntity> {
    const entity = (await (
      this.entityRepository as unknown as EntityRepository<{ id: string }>
    ).findOne(
      {
        id,
      },
      { populate }
    )) as TEntity;

    if (!entity) {
      throw new NotFoundException(`Entity with id ${id} not found`);
    }

    return entity;
  }

  public async createAsync(data: TEntity): Promise<void> {
    const entity = this.entityRepository.create(data);
    await this.em.persistAndFlush(entity);
  }

  public async updateAsync(data: TEntity): Promise<void> {
    const entity = await this.readByIdAsync(data.id);
    Object.assign(entity, data);
    await this.em.persistAndFlush(entity);
  }

  public async deleteAsync(id: string): Promise<void> {
    const entity = await this.readByIdAsync(id);
    await this.em.removeAndFlush(entity);
  }
}
