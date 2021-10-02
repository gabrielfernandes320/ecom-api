import { Cart, CartItem, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/services/PrismaService';
import CartNotFoundException from '../../../exceptions/CartNotFoundException';
import ICartsRepository from '../../../repositories/ICartsRepository';

@Injectable()
export class CartsRepository implements ICartsRepository {
    public constructor(private prisma: PrismaService) {}
    public async findByUserId(
        userId: string,
    ): Promise<Cart & { items: CartItem[] }> {
        return await this.prisma.cart.findFirst({
            where: { userId },
            include: { items: true },
        });
    }

    public async addItem(
        cartId: string,
        productId: string,
        quantity: number,
    ): Promise<Cart & { items: CartItem[] }> {
        await this.prisma.cart.update({
            where: { id: cartId },
            data: { items: { create: { quantity, productId } } },
            include: { items: true },
        });

        return await this.findById(cartId);
    }

    public async updateItem(
        cartId: string,
        productId: string,
        cartItem: Prisma.CartItemUpdateInput,
    ): Promise<Cart & { items: CartItem[] }> {
        await this.prisma.cartItem.updateMany({
            where: { cartId, productId },
            data: cartItem,
        });

        return await this.findById(cartId);
    }

    public async removeItem(cartId: string, productId: string) {
        const affected = await this.prisma.cartItem.deleteMany({
            where: { cartId, productId },
        });

        if (affected.count === 0) {
            return;
        }

        return this.findById(cartId);
    }

    public async findById(id: string) {
        const cart = await this.prisma.cart.findUnique({
            where: { id },
            include: { items: true },
        });

        if (!cart) {
            throw new CartNotFoundException(id);
        }

        return cart;
    }

    public async remove(id: string): Promise<void> {
        const affected: any = await this.prisma.cart.delete({
            where: { id },
        });

        if (affected.count === 0) {
            throw new CartNotFoundException(id);
        }
    }

    public async create(data: Prisma.CartCreateInput) {
        return await this.prisma.cart.create({
            data,
            include: { items: true },
        });
    }

    public async update(
        id: string,
        data: Prisma.CartUpdateInput,
    ): Promise<Cart> {
        const affected = await this.prisma.cart.updateMany({
            where: { id },
            data,
        });

        if (affected.count === 0) {
            throw new CartNotFoundException(id);
        }

        return this.findById(id);
    }
}

export const CARTS_REPOSITORY = 'CARTS_REPOSITORY';
