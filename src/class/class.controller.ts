import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClassService } from './class.service';
import { Class } from '../entities/Class';

@ApiTags('Classes')
@Controller('classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Get()
  public async readAllAsync(): Promise<Class[]> {
    return await this.classService.readAllAsync();
  }
}
