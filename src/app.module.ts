import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from './mikro-orm.config';
import { FactionModule } from './faction/faction.module';
import { RaceModule } from './race/race.module';
import { ClassModule } from './class/class.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      envFilePath: '.env',
      isGlobal: true,
    }),
    MikroOrmModule.forRoot(mikroOrmConfig),
    MikroOrmModule.forMiddleware(),
    ClassModule,
    FactionModule,
    PlayerModule,
    RaceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
