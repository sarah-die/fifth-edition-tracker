import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameStateController } from './gameState.controller';
import { GameState } from './gameState.entity';
import { GameStatesService } from './gameState.service';

@Module({
  imports: [TypeOrmModule.forFeature([GameState])],
  providers: [GameStatesService],
  controllers: [GameStateController],
})
export class GameStatesModule {}
