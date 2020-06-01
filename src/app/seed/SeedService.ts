import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from '../../Entities/Ingredient';
import { Repository } from 'typeorm';
import { readFileSync } from 'fs';
import * as path from 'path';
import { Injectable, Res } from '@nestjs/common';
import * as readline from 'readline';
import * as fs from 'fs';
import { Response } from 'express';
import { CraftingProfession } from '../../Entities/CraftingProfession';
import { CraftingStationType } from '../../Entities/CraftingStationType';

@Injectable()
export class SeedService {
    public constructor(
        @InjectRepository(Ingredient) private readonly ingredientRepository: Repository<Ingredient>,
        @InjectRepository(CraftingProfession) private readonly professionRepository: Repository<CraftingProfession>,
        @InjectRepository(CraftingStationType) private readonly stationTypeRepository: Repository<CraftingStationType>,
    ) {
    }

    public async seedIngredients() {
        const items: Ingredient[] = [];
        for (const line of await this.getLines('base_ingredients.txt')) {
            console.info('Adding Ingredient: ' + line);
            const ingredient: Ingredient = new Ingredient();
            ingredient.name = line;
            items.push(ingredient);
        }

        await this.ingredientRepository.save(items);
        console.info('Ingredients seeded successfully');
    }

    public async seedProfessions() {
        const professions: CraftingProfession[] = [];
        for (const line of await this.getLines('crafting_professions.txt')) {
            console.info('Adding Profession: ' + line);
            const profession: CraftingProfession = new CraftingProfession();
            profession.name = line;
            professions.push(profession);
        }

        await this.professionRepository.save(professions);
        console.info('Professions seeded successfully');
    }

    public async seedCraftingStationTypes() {
        const stations: CraftingStationType[] = [];
        for (const line of await this.getLines('crafting_station_types.txt')) {
            console.info('Adding Crafting Station type: ' + line);
            const stationType: CraftingStationType = new CraftingStationType();
            stationType.name = line;
            stations.push(stationType);
        }

        await this.stationTypeRepository.save(stations);
        console.info('Crafting station types seeded successfully');
    }

    public async getLines(filename: string) {
        const lines: string[] = [];
        const dataPath = path.join(__dirname, '..', '..', '..', 'data', 'seed', filename);
        const readInterface = readline.createInterface({
            input: fs.createReadStream(dataPath),
        });
        await (new Promise((resolve) => {
            readInterface.on('line', line => {
                if (line.charAt(0) != '#' && line.length > 2) {
                    lines.push(line);
                }
            });
            readInterface.on('close', () => {
                return resolve();
            });
        }));
        return lines;
    }
}