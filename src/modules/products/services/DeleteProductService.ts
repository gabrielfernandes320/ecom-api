import { Inject, Injectable } from '@nestjs/common';
import IProductsRepository from '../repositories/IProductsRepository';

@Injectable()
export default class DeleteProductService {
    public constructor(
        @Inject('ProductsRepository')
        private usersRepository: IProductsRepository,
    ) {}

    public async execute(id: string) {
        await this.usersRepository.remove(id);
    }
}
