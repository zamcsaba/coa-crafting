import { Controller, Get, Param, Render } from '@nestjs/common';
import { CraftService } from './CraftService';
import { Product } from '../../Entities/Product';
import { ProductService } from './ProductService';
import { CraftingData } from '../../Entities/CraftingData';
import { Ingredient } from '../../Entities/Ingredient';

@Controller('craft')
export class CraftController {
    public constructor(
        private readonly craftService: CraftService,
        private readonly productService: ProductService,
    ) {
    }

    @Get('products/list')
    @Render('craft/product-list')
    public async listProducts() {
        return {
            products: await this.craftService.listProducts(),
        };
    }

    @Get('product/:id')
    public async getProduct(@Param('id') id: number) {
        // get the product
        const product: Product = await this.productService.getById(id);
        // get the crafting data with it
        const craftingData: CraftingData = await this.craftService.getCraftingDataByProduct(product);
        // get the ingredients required
        const reqs = await this.craftService.getProductRequirements(craftingData);

        console.log(product);
        console.log(craftingData);
        console.log(reqs);
    }
}