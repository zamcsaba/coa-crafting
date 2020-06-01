import { Module } from '@nestjs/common';
import { CraftService } from './CraftService';
import { CraftController } from './CraftController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from '../../Entities/Ingredient';
import { CraftingProfession } from '../../Entities/CraftingProfession';
import { CraftingStationType } from '../../Entities/CraftingStationType';
import { CraftingData } from '../../Entities/CraftingData';
import { IngredientRequirement } from '../../Entities/IngredientRequirement';
import { IngredientCrafting } from '../../Entities/IngredientCrafting';
import { ProductCrafting } from '../../Entities/ProductCrafting';
import { Product } from '../../Entities/Product';
import { ProductService } from './ProductService';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Ingredient,
            CraftingProfession,
            CraftingStationType,
            CraftingData,
            IngredientRequirement,
            IngredientCrafting,
            ProductCrafting,
            Product,
        ]),
    ],
    providers: [
        CraftService,
        ProductService,
    ],
    controllers: [
        CraftController,
    ],
})
export class CraftModule {

}