import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Race } from '../entities/Race';
import { RaceController } from './race.controller';
import { RaceService } from './race.service';

@Module({
  imports: [MikroOrmModule.forFeature([Race], 'mikro-orm')],
  controllers: [RaceController],
  providers: [RaceService],
})
export class RaceModule {}
