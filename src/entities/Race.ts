import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ schema: 'dev' })
export class Race {
  @PrimaryKey({ type: 'uuid' })
  id!: string;

  @Property({ type: 'text', unique: 'race_name_key' })
  name!: string;
}
