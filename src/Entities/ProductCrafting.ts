import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CraftingData } from './CraftingData';
import { Product } from './Product';

@Entity()
export class ProductCrafting {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, {
        eager: true,
    })
    product: Product;

    @OneToOne(() => CraftingData, {
        eager: true,
    })
    @JoinColumn()
    craftingData: CraftingData;

    @Column('int')
    quantity: number;
}