import { Module } from '@nestjs/common';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseIngredient } from './Ingredients/BaseIngredients/BaseIngredient';
import { BaseIngredientModule } from './Ingredients/BaseIngredients/BaseIngredientModule';

// Main module
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'data/db.sqlite',
            synchronize: true,
            entities: [
                BaseIngredient,
            ],
        }),
        BaseIngredientModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
