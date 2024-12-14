import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ schema: 'dev' })
export class Class {
  @PrimaryKey({ type: 'uuid' })
  id!: string;

  @Property({ type: 'text', unique: 'class_name_key' })
  name!: string;
}
