import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { AllowedClasses } from './AllowedClasses';
import { Class } from './Class';
import { Faction } from './Faction';
import { Race } from './Race';

@Entity({ schema: 'dev' })
export class Player {
  @PrimaryKey({ type: 'uuid', defaultRaw: `uuid_generate_v4()` })
  id!: string & Opt;

  @Property({ type: 'text', unique: 'player_name_key' })
  name!: string;

  @ManyToOne({ entity: () => Race })
  race!: Race;

  @ManyToOne({ entity: () => Class })
  class!: Class;

  @ManyToOne({ entity: () => Faction })
  faction!: Faction;

  @Property({ type: 'integer' })
  level: number & Opt = 1;

  @Property({ type: 'boolean' })
  isEnabled: boolean & Opt = true;

  @Property({ columnType: 'timestamp(6)', nullable: true, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true, defaultRaw: `CURRENT_TIMESTAMP` })
  updatedAt?: Date;

  @ManyToOne({
    entity: () => AllowedClasses,
    fieldNames: ['race_id', 'faction_id', 'class_id'],
    hidden: true,
    nullable: true,
  })
  'dev.allowedClasses'?: AllowedClasses;
}
