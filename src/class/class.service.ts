import { BaseService } from '../shared/services/base.service';
import { Class } from '../entities/Class';
import { Injectable } from '@nestjs/common';
import { InjectMikroORM, InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, MikroORM } from '@mikro-orm/postgresql';

@Injectable()
export class ClassService extends BaseService<Class> {
  constructor(
    @InjectRepository(Class, 'mikro-orm') classRepository: EntityRepository<Class>,
    @InjectMikroORM('mikro-orm') orm: MikroORM
  ) {
    super(classRepository, orm.em);
  }
}
