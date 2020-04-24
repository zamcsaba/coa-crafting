import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BaseIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
}