import { Ingredient } from '../../Entities/Ingredient';
import { Repository } from 'typeorm';
import { readFileSync } from 'fs';
import * as path from 'path';

export async function seed(repository: Repository<Ingredient>) {
    await repository.save(alchemyBaseIngredients());
}

function alchemyBaseIngredients(): Ingredient[] {
    let result: Ingredient[] = [];

    let data = readFileSync(path.join(__dirname, '..', '..', '..', '..', 'data', 'seed', 'base_ingredients_alchemy.txt')).toString();
    for (let line in data.split('/\r?\n/')) {
        let ingredient = new Ingredient();
        ingredient.name = line;
        result.push(ingredient);
    }

    return result;
}