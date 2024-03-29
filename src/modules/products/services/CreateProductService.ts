import { Inject, Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import CreateProductDto from '../dtos/CreateProductDto';
import { PRODUCTS_REPOSITORY } from '../infra/prisma/repositories/ProductsRepository';
import IProductsRepository from '../repositories/IProductsRepository';

@Injectable()
export default class CreateProductService {
    public constructor(
        @Inject(PRODUCTS_REPOSITORY)
        private productsRepository: IProductsRepository,
    ) {}

    public async execute(productDto: CreateProductDto): Promise<Product> {
        const { categories, ...rest } = productDto;

        return await this.productsRepository.create({
            ...rest,
            categories: { connect: categories },
        });
    }
}
