import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GameState {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  code: string;

  @Column("simple-json")
  state: {characters: []};
}
