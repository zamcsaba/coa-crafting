import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CraftingProfession {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
    })
    name: string;
}