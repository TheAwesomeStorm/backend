import { Entity, ManyToOne, type Opt, PrimaryKey, Unique } from '@mikro-orm/core';
import { Faction } from './Faction';
import { Race } from './Race';

@Entity({ schema: 'dev' })
@Unique({ name: 'unique_race_faction', properties: ['race', 'faction'] })
export class AllowedRaces {
  @PrimaryKey({ type: 'uuid', defaultRaw: `uuid_generate_v4()` })
  id!: string & Opt;

  @ManyToOne({ entity: () => Race })
  race!: Race;

  @ManyToOne({ entity: () => Faction })
  faction!: Faction;
}
