import { Prisma, Product } from '@prisma/client';
import IReadRepository from '../../database/repositories/IReadRepository';
import IWriteRepository from '../../database/repositories/IWriteRepository';
import ListProductDTO from '../dtos/ListProductDTO';

export default interface IProductsRepository
    extends IReadRepository<Product>,
        IWriteRepository<Product> {
    findAll(params: ListProductDTO): Promise<any>;

    create(data: Prisma.ProductCreateInput): Promise<Product>;

    update(id: string, user: Prisma.ProductUpdateInput): Promise<Product>;
}
