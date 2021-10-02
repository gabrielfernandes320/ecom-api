import { Cart, CartItem, Prisma } from '@prisma/client';
import IWriteRepository from '../../database/repositories/IWriteRepository';

export default interface ICartsRepository extends IWriteRepository<Cart> {
    create(data: Prisma.CartCreateInput): Promise<Cart>;

    findById(id: string): Promise<Cart & { items: CartItem[] }>;

    findByUserId(userId: string): Promise<Cart & { items: CartItem[] }>;

    update(id: string, user: Prisma.CartUpdateInput): Promise<Cart>;

    removeItem(
        cartId: string,
        productId: string,
    ): Promise<Cart & { items: CartItem[] }>;

    updateItem(
        cartId: string,
        productId: string,
        cartItem: Prisma.CartItemUpdateInput,
    ): Promise<Cart & { items: CartItem[] }>;

    addItem(
        cartId: string,
        productId: string,
        quantity: number,
    ): Promise<Cart & { items: CartItem[] }>;
}
