import { Prisma, Product } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/services/PrismaService';
import ListProductDto from '../../../dtos/ListProductDto';
import ProductNotFoundException from '../../../exceptions/ProductNotFoundException';
import IProductsRepository from '../../../repositories/IProductsRepository';

@Injectable()
export class ProductsRepository implements IProductsRepository {
    public constructor(private prisma: PrismaService) {}

    public async findAll(params: ListProductDto): Promise<any> {
        const { order, perPage, page, search } = params;

        return await this.prisma.product.findMany({
            skip: perPage * (page - 1),
            take: perPage,
            orderBy: { id: order },
            where: search ? { name: { contains: search } } : {},
            include: { cartItem: true, categories: true },
        });
    }

    public async findById(id: string): Promise<Product> {
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: { categories: true, discounts: true },
        });

        if (!product) {
            throw new ProductNotFoundException(id);
        }

        return product;
    }

    public async remove(id: string): Promise<void> {
        const affected: any = await this.prisma.product.delete({
            where: { id },
        });

        if (affected.count === 0) {
            throw new ProductNotFoundException(id);
        }
    }

    public async create(data: Prisma.ProductCreateInput): Promise<Product> {
        return await this.prisma.product.create({ data });
    }

    public async update(
        id: string,
        data: Prisma.ProductUpdateInput,
    ): Promise<Product> {
        console.log(data);

        const affected = await this.prisma.product.updateMany({
            where: { id },
            data,
        });

        if (affected.count === 0) {
            throw new ProductNotFoundException(id);
        }

        return this.findById(id);
    }
}

export const PRODUCTS_REPOSITORY = 'PRODUCTS_REPOSITORY';
