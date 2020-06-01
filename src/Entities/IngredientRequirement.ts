import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ingredient } from './Ingredient';
import { CraftingData } from './CraftingData';

@Entity()
export class IngredientRequirement {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Ingredient, {
        eager: true,
    })
    ingredient: Ingredient;

    @Column('int')
    quantity: number;

    @ManyToOne(() => CraftingData, {
        eager: false,
    })
    craftingData: CraftingData;
}