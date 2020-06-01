import { Module } from '@nestjs/common';
import { SeedService } from './SeedService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from '../../Entities/Ingredient';
import { SeedController } from './SeedController';
import { CraftingProfession } from '../../Entities/CraftingProfession';
import { CraftingStationType } from '../../Entities/CraftingStationType';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Ingredient,
            CraftingProfession,
            CraftingStationType,
        ]),
    ],
    providers: [
        SeedService,
    ],
    controllers: [
        SeedController,
    ],
})
export class SeedModule {

}