import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from '../../Entities/Ingredient';
import { Repository } from 'typeorm';
import { CraftingData } from '../../Entities/CraftingData';
import { CraftingProfession } from '../../Entities/CraftingProfession';
import { CraftingStationType } from '../../Entities/CraftingStationType';
import { IngredientCrafting } from '../../Entities/IngredientCrafting';
import { IngredientRequirement } from '../../Entities/IngredientRequirement';
import { AddCraftingDataDTO } from './AddCraftingDataDTO';
import { Product } from '../../Entities/Product';
import { ProductCrafting } from '../../Entities/ProductCrafting';

@Injectable()
export class CraftingDataSeedService {
    public constructor(
        @InjectRepository(Ingredient) private readonly ingredientRepository: Repository<Ingredient>,
        @InjectRepository(CraftingProfession) private readonly craftingProfessionRepository: Repository<CraftingProfession>,
        @InjectRepository(CraftingStationType) private readonly craftingStationTypeRepository: Repository<CraftingStationType>,
        @InjectRepository(CraftingData) private readonly craftingDataRepository: Repository<CraftingData>,
        @InjectRepository(IngredientCrafting) private readonly ingredientCraftingRepository: Repository<IngredientCrafting>,
        @InjectRepository(IngredientRequirement) private readonly requirementRepository: Repository<IngredientRequirement>,
        @InjectRepository(Product) private readonly productRepository: Repository<Product>,
        @InjectRepository(ProductCrafting) private readonly productCraftingRepository: Repository<ProductCrafting>,
    ) {
    }

    public async saveCrafting(data: AddCraftingDataDTO) {
        const craftingData: CraftingData = new CraftingData();
        craftingData.xp = data.xp;
        craftingData.level = data.level;
        craftingData.craftingProfession = await this.getProfession(data.profession);
        craftingData.craftingStationType = await this.getCraftingStationType(data.station);
        await this.craftingDataRepository.save(craftingData);

        console.info('Added Crafting Data. ID: ' + craftingData.id);

        // TODO: make this better lol (i was in hurry)
        const ingredients: { name: string, qty: number }[] = [];
        ingredients[0] = { name: data.ingredient1, qty: data.quantity1 };
        ingredients[1] = { name: data.ingredient2, qty: data.quantity2 };
        ingredients[2] = { name: data.ingredient3, qty: data.quantity3 };
        ingredients[3] = { name: data.ingredient4, qty: data.quantity4 };

        for (const entry of ingredients) {
            if (entry.name.length > 0) {
                const req: IngredientRequirement = new IngredientRequirement();
                req.ingredient = await this.getIngredient(entry.name);
                req.quantity = entry.qty;
                req.craftingData = craftingData;
                await this.requirementRepository.save(req);
                console.info(`Added Ingredient Requirement: ${entry.qty}x${entry.name}`);
            }
        }

        const craftedIngredients: { name: string, qty: number, isByproduct: boolean }[] = [];
        craftedIngredients[0] = { name: data.craftedIngredient1, qty: data.craftedIngredientQty1, isByproduct: false };
        craftedIngredients[1] = { name: data.craftedIngredient2, qty: data.craftedIngredientQty2, isByproduct: false };
        craftedIngredients[2] = { name: data.craftedByproduct1, qty: data.craftedByproductQty1, isByproduct: true };
        craftedIngredients[3] = { name: data.craftedByproduct2, qty: data.craftedByproductQty2, isByproduct: true };
        for (const entry of craftedIngredients) {
            if (entry.name.length > 0) {
                let i: Ingredient = new Ingredient();
                i.name = entry.name;
                try {
                    await this.ingredientRepository.save(i);
                    console.info(`Added new ingredient: ${entry.name}`);
                } catch (e) {
                    console.info(`Ingredient "${entry.name}" is already existing.`);
                    i = await this.getIngredient(entry.name);
                }
                const ic: IngredientCrafting = new IngredientCrafting();
                ic.ingredient = i;
                ic.craftingData = craftingData;
                ic.quantity = entry.qty;
                ic.isByproduct = entry.isByproduct ? 1 : 0;
                await this.ingredientCraftingRepository.save(ic);
                console.info(`Added IngredientCrafting Entry: ${ic.id}`);
            }
        }

        const craftedProducts: { name: string, qty: number }[] = [];
        craftedProducts[0] = { name: data.craftedProduct1, qty: data.craftedProductQty1 };
        craftedProducts[1] = { name: data.craftedProduct2, qty: data.craftedProductQty2 };
        for (const entry of craftedProducts) {
            if (entry.name.length > 0) {
                let p: Product = new Product();
                p.name = entry.name;
                try {
                    await this.productRepository.save(p);
                    console.info(`Added new product: ${entry.name}`);
                } catch (e) {
                    console.info(`Product "${entry.name}" is already existing.`);
                    p = await this.getProduct(entry.name);
                }
                const pc: ProductCrafting = new ProductCrafting();
                pc.craftingData = craftingData;
                pc.product = p;
                pc.quantity = entry.qty;
                await this.productCraftingRepository.save(pc);
                console.info(`Added Product Crafting: ${pc.id}`);
            }
        }

        // TODO: byproduct
    }

    private async getIngredient(name: string): Promise<Ingredient> {
        return await this.getObjectByName(this.ingredientRepository, name);
    }

    private async getProduct(name: string): Promise<Product> {
        return await this.getObjectByName(this.productRepository, name);
    }

    private async getProfession(name: string): Promise<CraftingProfession> {
        return await this.getObjectByName(this.craftingProfessionRepository, name);
    }

    private async getCraftingStationType(name: string): Promise<CraftingStationType> {
        return await this.getObjectByName(this.craftingStationTypeRepository, name);
    }

    private async getObjectByName(repository: Repository<any>, name: string) {
        return await repository.findOne({ where: { name: name } });
    }
}