import { Product } from '.prisma/client';
import { Inject, Injectable } from '@nestjs/common';
import { PRODUCTS_REPOSITORY } from '../infra/prisma/repositories/ProductsRepository';
import IProductsRepository from '../repositories/IProductsRepository';

@Injectable()
export default class ShowProductService {
    public constructor(
        @Inject(PRODUCTS_REPOSITORY)
        private usersRepository: IProductsRepository,
    ) {}

    public async execute(id: string): Promise<Product> {
        return await this.usersRepository.findById(id);
    }
}
