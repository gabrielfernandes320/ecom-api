import { Inject, Injectable } from '@nestjs/common';
import { Cart, CartItem } from '@prisma/client';
import AddItemDto from '../dtos/AddItemDto';
import {
    CartsRepository,
    CARTS_REPOSITORY,
} from '../infra/prisma/repositories/CartsRepository';

@Injectable()
export default class AddItemService {
    public constructor(
        @Inject(CARTS_REPOSITORY)
        private cartsRepository: CartsRepository,
    ) {}

    public async execute(
        userId: string,
        addItemDto: AddItemDto,
    ): Promise<Cart & { items: CartItem[] }> {
        const existingCart = await this.cartsRepository.findByUserId(userId);

        if (existingCart) {
            const itemAlreadyInCart = existingCart.items.find(
                (item) => item.productId === addItemDto.productId,
            );

            if (itemAlreadyInCart) {
                return await this.cartsRepository.updateItem(
                    existingCart.id,
                    addItemDto.productId,
                    {
                        quantity: addItemDto.quantity,
                    },
                );
            }

            return await this.cartsRepository.addItem(
                existingCart.id,
                addItemDto.productId,
                addItemDto.quantity,
            );
        }

        const newCart = await this.cartsRepository.create({
            user: { connect: { id: userId } },
        });

        await this.cartsRepository.updateItem(
            newCart.id,
            addItemDto.productId,
            {
                quantity: addItemDto.quantity,
            },
        );

        return await this.cartsRepository.findByUserId(userId);
    }
}
