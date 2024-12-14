import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import * as dotenv from 'dotenv';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { EntityGenerator } from '@mikro-orm/entity-generator';

dotenv.config();

const mikroOrmConfig: MikroOrmModuleSyncOptions = {
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  dbName: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  contextName: 'mikro-orm',
  driver: PostgreSqlDriver,
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  extensions: [EntityGenerator],
  registerRequestContext: false,
};

export default mikroOrmConfig;
