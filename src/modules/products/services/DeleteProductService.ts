import { Inject, Injectable } from '@nestjs/common';
import { PRODUCTS_REPOSITORY } from '../infra/prisma/repositories/ProductsRepository';
import IProductsRepository from '../repositories/IProductsRepository';

@Injectable()
export default class DeleteProductService {
    public constructor(
        @Inject(PRODUCTS_REPOSITORY)
        private usersRepository: IProductsRepository,
    ) {}

    public async execute(id: string) {
        await this.usersRepository.remove(id);
    }
}
