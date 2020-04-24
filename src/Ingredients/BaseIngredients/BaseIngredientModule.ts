import { Module } from '@nestjs/common';
import { BaseIngredientController } from './BaseIngredientController';
import { BaseIngredientService } from './BaseIngredientService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseIngredient } from './BaseIngredient';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            BaseIngredient,
        ]),
    ],
    controllers: [BaseIngredientController],
    providers: [BaseIngredientService],
})
export class BaseIngredientModule {

}