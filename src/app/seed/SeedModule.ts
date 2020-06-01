import { Module } from '@nestjs/common';
import { SeedService } from './SeedService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from '../../Entities/Ingredient';
import { SeedController } from './SeedController';
import { CraftingProfession } from '../../Entities/CraftingProfession';
import { CraftingStationType } from '../../Entities/CraftingStationType';
import { CraftingDataSeedService } from './CraftingDataSeedService';
import { CraftingData } from '../../Entities/CraftingData';
import { IngredientRequirement } from '../../Entities/IngredientRequirement';
import { IngredientCrafting } from '../../Entities/IngredientCrafting';
import { ProductCrafting } from '../../Entities/ProductCrafting';
import { Product } from '../../Entities/Product';

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
        SeedService,
        CraftingDataSeedService,
    ],
    controllers: [
        SeedController,
    ],
})
export class SeedModule {

}