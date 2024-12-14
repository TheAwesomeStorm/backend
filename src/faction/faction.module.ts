import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Faction } from '../entities/Faction';
import { FactionService } from './faction.service';
import { FactionController } from './faction.controller';

@Module({
  imports: [MikroOrmModule.forFeature([Faction], 'mikro-orm')],
  controllers: [FactionController],
  providers: [FactionService],
})
export class FactionModule {}
