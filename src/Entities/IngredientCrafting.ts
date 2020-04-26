import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CraftingData } from './CraftingData';
import { Ingredient } from './Ingredient';

@Entity()
export class IngredientCrafting {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Ingredient)
    ingredient: Ingredient;

    @OneToOne(() => CraftingData)
    @JoinColumn()
    craftingData: CraftingData;
}