import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PlayerService } from './player.service';
import { Player } from '../entities/Player';
import { Paginated } from '../shared/classes/paginated';

@ApiTags('Players')
@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  public async readAllPaginatedAsync(
    @Query('page') page: number = 1,
    @Query('size') size: number = 10
  ): Promise<Paginated<Player>> {
    return this.playerService.readAllPaginatedAsync(page, size);
  }

  @Get(':uuid')
  public async readByIdAsync(@Param('uuid', new ParseUUIDPipe()) uuid: string): Promise<Player> {
    return await this.playerService.readByIdAsync(uuid);
  }

  @Post()
  public async createAsync(@Body() data: Player): Promise<void> {
    await this.playerService.createAsync(data);
  }

  @Put(':uuid')
  public async updateAsync(
    @Param('uuid', new ParseUUIDPipe()) uuid: string,
    @Body() data: Player
  ): Promise<void> {
    const player = { ...data, id: uuid };
    await this.playerService.updateAsync(player);
  }

  @Delete(':uuid')
  public async deleteAsync(@Param('uuid', new ParseUUIDPipe()) uuid: string): Promise<void> {
    await this.playerService.deleteAsync(uuid);
  }
}
