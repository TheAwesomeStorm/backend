import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { RaceService } from './race.service';
import { Race } from '../entities/Race';

@ApiTags('Races')
@Controller('races')
export class RaceController {
  constructor(private readonly raceService: RaceService) {}

  @Get()
  public async readAllAsync(): Promise<Race[]> {
    return await this.raceService.readAllAsync();
  }
}
