import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GameState {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  gameState: string;
}
