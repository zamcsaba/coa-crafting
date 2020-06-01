import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CraftingData } from './CraftingData';
import { Ingredient } from './Ingredient';

@Entity()
export class IngredientCrafting {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Ingredient)
    ingredient: Ingredient;

    @ManyToOne(type => CraftingData)
    craftingData: CraftingData;

    @Column('int')
    quantity: number;

    @Column('int', { default: 0 })
    isByproduct: number;
}