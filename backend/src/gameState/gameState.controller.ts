import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { GameStatesService } from './gameState.service';
import { GameState } from './gameState.entity';
import { randomUUID } from 'node:crypto';

@Controller('gameStates')
export class GameStateController {
  constructor(private readonly gameStateService: GameStatesService) {}

  @Get('')
  async f(@Param() params: { code: string }): Promise<string> {
    return "h"
  }

  @Get(':code')
  async load(@Param() params: { code: string }): Promise<GameState> {
    const gameState = await this.gameStateService.findByCode(params.code);
    if (!gameState) throw new HttpException('Game State not found', HttpStatus.NOT_FOUND);
    return gameState;
  }

  @Post('')
  async createNew(@Body() body : Omit<GameState, "id" | "code">): Promise<GameState> {
    console.log({s: body})
    const code = randomUUID();
    return await this.gameStateService.create({code, state: body.state});
  }
}
