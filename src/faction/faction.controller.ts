import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { FactionService } from './faction.service';
import { Faction } from '../entities/Faction';

@ApiTags('Factions')
@Controller('factions')
export class FactionController {
  constructor(private readonly factionService: FactionService) {}

  @Get()
  public async readAllAsync(): Promise<Faction[]> {
    return await this.factionService.readAllAsync();
  }
}
