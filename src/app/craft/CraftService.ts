import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../Entities/Product';
import { Repository } from 'typeorm';
import { CraftingData } from '../../Entities/CraftingData';
import { ProductCrafting } from '../../Entities/ProductCrafting';
import { IngredientRequirement } from '../../Entities/IngredientRequirement';
import { Ingredient } from '../../Entities/Ingredient';
import { IngredientCrafting } from '../../Entities/IngredientCrafting';

@Injectable()
export class CraftService {
    public constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>,
        @InjectRepository(CraftingData) private readonly craftingDataRepository: Repository<CraftingData>,
        @InjectRepository(ProductCrafting) private readonly productCraftingRepository: Repository<ProductCrafting>,
        @InjectRepository(IngredientRequirement) private readonly requirementRepository: Repository<IngredientRequirement>,
        @InjectRepository(IngredientCrafting) private readonly ingredientCraftingRepository: Repository<IngredientCrafting>,
        @InjectRepository(Ingredient) private readonly ingredientRepository: Repository<Ingredient>,
    ) {
    }

    public async listProducts() {
        return await this.productRepository.find();
    }

    public async getCraftingDataByProduct(product: Product) {
        const productCrafting: ProductCrafting = await this.productCraftingRepository.findOne({
            where: {
                product: product,
            },
        });
        return await this.craftingDataRepository.findOne(productCrafting.craftingData.id);
    }

    // TODO: recursive options, please
    public async getProductRequirements(craftingData: CraftingData) {
        const nodes: { data: Ingredient, parent?: Ingredient }[] = [];

        const reqs = await this.requirementRepository.find({
            where: {
                craftingData: craftingData,
            },
        });

        for (const req of reqs) {

        }
    }

    private async isBaseIngredient(i: Ingredient) {
        const ic: IngredientCrafting[] = await this.ingredientCraftingRepository.find({
            where: {
                ingredient: i,
            },
        });
        return ic.length <= 0;
    }
}