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

    public async execute(id: string, user: UpdateProductDto): Promise<Product> {
        const { categories, ...rest } = user;

        return await this.usersRepository.update(id, {
            ...rest,
            categories: { connect: categories },
        });
    }
}
