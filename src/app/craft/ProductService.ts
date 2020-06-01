import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../Entities/Product';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    public constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>,
    ) {
    }

    public async getById(id: number) {
        return await this.productRepository.findOne(id);
    }
}