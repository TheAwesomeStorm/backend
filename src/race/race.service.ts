import { Injectable } from '@nestjs/common';
import { InjectMikroORM, InjectRepository } from '@mikro-orm/nestjs';
import { Race } from '../entities/Race';
import { EntityRepository, MikroORM } from '@mikro-orm/postgresql';
import { BaseService } from '../shared/services/base.service';

@Injectable()
export class RaceService extends BaseService<Race> {
  constructor(
    @InjectRepository(Race, 'mikro-orm') raceRepository: EntityRepository<Race>,
    @InjectMikroORM('mikro-orm') orm: MikroORM
  ) {
    super(raceRepository, orm.em);
  }
}
