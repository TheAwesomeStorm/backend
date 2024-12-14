import { BaseService } from '../shared/services/base.service';
import { Faction } from '../entities/Faction';
import { InjectMikroORM, InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, MikroORM } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FactionService extends BaseService<Faction> {
  constructor(
    @InjectRepository(Faction, 'mikro-orm') factionRepository: EntityRepository<Faction>,
    @InjectMikroORM('mikro-orm') orm: MikroORM
  ) {
    super(factionRepository, orm.em);
  }
}
