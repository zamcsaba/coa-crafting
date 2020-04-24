import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AddBaseIngredientDTO } from './DTO/AddBaseIngredientDTO';
import { BaseIngredientService } from './BaseIngredientService';

@Controller('base-ingredients')
export class BaseIngredientController {
    public constructor(
        private readonly baseIngredientService: BaseIngredientService,
    ) {
    }

    @Get('/add')
    @Render('BaseIngredients/add')
    public getAdd() {
    }

    @Post('add')
    public async postAdd(@Body() addBaseIngredientDTO: AddBaseIngredientDTO) {
        await this.baseIngredientService.add(addBaseIngredientDTO);
    }

    @Get('')
    @Render('BaseIngredients/list')
    public async getAll() {
        return {
            baseIngredients: await this.baseIngredientService.getAll(),
        };
    }
}