import { Inject, Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import UpdateProductDto from '../dtos/UpdateProductDto';
import { PRODUCTS_REPOSITORY } from '../infra/prisma/repositories/ProductsRepository';
import IProductsRepository from '../repositories/IProductsRepository';

@Injectable()
export default class UpdateProductService {
    public constructor(
        @Inject(PRODUCTS_REPOSITORY)
        private usersRepository: IProductsRepository,
    ) {}

    public async execute(
        id: string,
        product: UpdateProductDto,
    ): Promise<Product> {
        const { categories, ...rest } = product;

        return await this.usersRepository.update(id, {
            id: rest.id,
            description: rest.description,
            enabled: rest.enabled,
            price: rest.price,
            name: rest.name,
        });
    }
}
