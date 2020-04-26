import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CraftingStationType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}