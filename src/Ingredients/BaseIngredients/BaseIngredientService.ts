import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseIngredient } from './BaseIngredient';
import { Repository } from 'typeorm';
import { AddBaseIngredientDTO } from './DTO/AddBaseIngredientDTO';

@Injectable()
export class BaseIngredientService {
    constructor(
        @InjectRepository(BaseIngredient)
        private readonly baseIngredientRepository: Repository<BaseIngredient>,
    ) {
    }

    public async add(addBaseIngredientDTO: AddBaseIngredientDTO) {
        let ingredient = new BaseIngredient();
        ingredient.name = addBaseIngredientDTO.name;
        await this.baseIngredientRepository.save(ingredient);
    }

    public async getAll(): Promise<BaseIngredient[]> {
        return await this.baseIngredientRepository.find();
    }
}