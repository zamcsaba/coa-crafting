import { Controller, Get, Res } from '@nestjs/common';
import { SeedService } from './SeedService';
import { Response } from 'express';

@Controller('seed')
export class SeedController {
    public constructor(
        private readonly seedService: SeedService,
    ) {
    }

    @Get('ingredients')
    public async seedIngredients(@Res() res: Response) {
        await this.seedService.seedIngredients();
        return res.redirect('/');
    }

    @Get('professions')
    public async seedProfessions(@Res() res: Response) {
        await this.seedService.seedProfessions();
        return res.redirect('/');
    }

    @Get('station-types')
    public async seedCraftingStationTypes(@Res() res: Response) {
        await this.seedService.seedCraftingStationTypes();
        return res.redirect('/');
    }
}