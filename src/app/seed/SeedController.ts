import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { SeedService } from './SeedService';
import { Response } from 'express';
import { AddCraftingDataDTO } from './AddCraftingDataDTO';
import { CraftingDataSeedService } from './CraftingDataSeedService';

@Controller('seed')
export class SeedController {
    public constructor(
        private readonly seedService: SeedService,
        private readonly dataSeedService: CraftingDataSeedService,
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

    @Get('add-data')
    @Render('seed/add')
    public getAddData() {
    }

    @Post('add-data')
    public async addData(@Body() body: AddCraftingDataDTO, @Res() res: Response) {
        await this.dataSeedService.saveCrafting(body);
        res.send(body);
    }
}