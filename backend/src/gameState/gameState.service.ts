import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameState } from './gameState.entity';

@Injectable()
export class GameStatesService {
  constructor(
    @InjectRepository(GameState)
    private GameStatesRepository: Repository<GameState>,
  ) {}

  findOne(id: number): Promise<GameState | null> {
    return this.GameStatesRepository.findOneBy({ id });
  }

  findByCode(code: string): Promise<GameState | null> {
    return this.GameStatesRepository.findOneBy({ code });
  }

  async remove(id: number): Promise<void> {
    await this.GameStatesRepository.delete(id);
  }
}
