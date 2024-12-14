import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ schema: 'dev' })
export class Faction {
  @PrimaryKey({ type: 'uuid' })
  id!: string;

  @Property({ type: 'text', unique: 'faction_name_key' })
  name!: string;
}
