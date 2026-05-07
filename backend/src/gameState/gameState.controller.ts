import { Controller, Get, Param } from '@nestjs/common';
import { GameStatesService } from './gameState.service';

@Controller('gameState')
export class GameStateController {
  constructor(private readonly gameStateService: GameStatesService) {}

  @Get('')
  async f(@Param() params: { code: string }): Promise<string> {
    return "h"
  }

  @Get(':code')
  async load(@Param() params: { code: string }): Promise<string> {
    const gameState = await this.gameStateService.findByCode(params.code);
    if (!gameState) return 'Game State not found';
    return gameState.gameState;
  }
}
