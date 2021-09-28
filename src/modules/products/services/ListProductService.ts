import { Inject, Injectable } from '@nestjs/common';
import ListProductDto from '../dtos/ListProductDto';
import IProductsRepository from '../repositories/IProductsRepository';

@Injectable()
export default class ListProductService {
    public constructor(
        @Inject('ProductsRepository')
        private usersRepository: IProductsRepository,
    ) {}

    public async execute(listProductDto: ListProductDto): Promise<any> {
        return await this.usersRepository.findAll(listProductDto);
    }
}
