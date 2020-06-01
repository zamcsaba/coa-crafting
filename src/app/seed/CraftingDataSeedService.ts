import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from '../../Entities/Ingredient';
import { Repository } from 'typeorm';

@Injectable()
export class CraftingDataSeedService {
    public constructor(
        @InjectRepository(Ingredient) private readonly ingredientRepository: Repository<Ingredient>
    ) {
    }

    public async seedAlchemy() {
        // A/ Alchemical Oils
        // 1. Enchanting Oil
        const emptyFlask = await this.ingredientRepository.findOne({
            where: {
                name: 'Empty Flask'
            }
        })
    }
}