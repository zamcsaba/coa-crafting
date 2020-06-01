import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CraftingStationType } from './CraftingStationType';
import { CraftingProfession } from './CraftingProfession';

@Entity()
export class CraftingData {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    level: number;

    @Column()
    xp: number;

    @ManyToOne(() => CraftingStationType, {
        eager: true,
    })
    craftingStationType: CraftingStationType;

    @ManyToOne(() => CraftingProfession, {
        eager: true,
    })
    craftingProfession: CraftingProfession;
}