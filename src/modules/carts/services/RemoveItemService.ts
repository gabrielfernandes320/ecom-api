import { Inject, Injectable } from '@nestjs/common';
import { Cart, CartItem } from '@prisma/client';
import RemoveItemDto from '../dtos/RemoveItemDto';
import {
    CartsRepository,
    CARTS_REPOSITORY,
} from '../infra/prisma/repositories/CartsRepository';

@Injectable()
export default class RemoveItemService {
    public constructor(
        @Inject(CARTS_REPOSITORY)
        private cartsRepository: CartsRepository,
    ) {}

    public async execute(
        userId: string,
        removeItemDto: RemoveItemDto,
    ): Promise<Cart & { items: CartItem[] }> {
        const existingCart = await this.cartsRepository.findByUserId(userId);

        if (!existingCart) {
            return await this.cartsRepository.create({
                user: { connect: { id: userId } },
            });
        }

        await this.cartsRepository.removeItem(
            existingCart.id,
            removeItemDto.productId,
        );

        return await this.cartsRepository.findByUserId(userId);
    }
}
