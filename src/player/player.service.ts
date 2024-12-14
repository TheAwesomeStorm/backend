import { Injectable } from '@nestjs/common';
import { BaseService } from '../shared/services/base.service';
import { Player } from '../entities/Player';
import { InjectMikroORM, InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, MikroORM, Populate } from '@mikro-orm/postgresql';
import { Paginated } from '../shared/classes/paginated';

@Injectable()
export class PlayerService extends BaseService<Player> {
  constructor(
    @InjectRepository(Player, 'mikro-orm') playerRepository: EntityRepository<Player>,
    @InjectMikroORM('mikro-orm') orm: MikroORM
  ) {
    super(playerRepository, orm.em);
  }

  public async readAllPaginatedAsync(page: number, size: number): Promise<Paginated<Player>> {
    return await super.readAllPaginatedAsync(page, size, [
      'race',
      'class',
      'faction',
    ] as unknown as Populate<Player, string>);
  }
}
