import { Entity, ManyToOne, type Opt, PrimaryKey, Unique } from '@mikro-orm/core';
import { Class } from './Class';
import { Faction } from './Faction';
import { Race } from './Race';

@Entity({ schema: 'dev' })
@Unique({ name: 'unique_race_faction_class', properties: ['race', 'faction', 'class'] })
export class AllowedClasses {
  @PrimaryKey({ type: 'uuid', defaultRaw: `uuid_generate_v4()` })
  id!: string & Opt;

  @ManyToOne({ entity: () => Race })
  race!: Race;

  @ManyToOne({ entity: () => Faction })
  faction!: Faction;

  @ManyToOne({ entity: () => Class })
  class!: Class;
}
