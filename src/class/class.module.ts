import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Class } from '../entities/Class';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';

@Module({
  imports: [MikroOrmModule.forFeature([Class], 'mikro-orm')],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
