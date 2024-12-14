import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Player } from '../entities/Player';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';

@Module({
  imports: [MikroOrmModule.forFeature([Player], 'mikro-orm')],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
