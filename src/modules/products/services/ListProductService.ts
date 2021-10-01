import { Inject, Injectable } from '@nestjs/common';
import ListProductDto from '../dtos/ListProductDto';
import { PRODUCTS_REPOSITORY } from '../infra/prisma/repositories/ProductsRepository';
import IProductsRepository from '../repositories/IProductsRepository';

@Injectable()
export default class ListProductService {
    public constructor(
        @Inject(PRODUCTS_REPOSITORY)
        private usersRepository: IProductsRepository,
    ) {}

    public async execute(listProductDto: ListProductDto): Promise<any> {
        return await this.usersRepository.findAll(listProductDto);
    }
}
