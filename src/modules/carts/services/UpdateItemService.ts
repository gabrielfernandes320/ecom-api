import { Inject, Injectable } from '@nestjs/common';
import { Cart, CartItem } from '@prisma/client';
import UpdateItemDto from '../dtos/UpdateItemDto';
import {
    CartsRepository,
    CARTS_REPOSITORY,
} from '../infra/prisma/repositories/CartsRepository';
import AddItemService from './AddItemService';
import RemoveItemService from './RemoveItemService';

@Injectable()
export default class UpdateItemService {
    public constructor(
        @Inject(CARTS_REPOSITORY)
        private cartsRepository: CartsRepository,
        private addItemService: AddItemService,
        private removeItemService: RemoveItemService,
    ) {}

    public async execute(
        userId: string,
        updateItemDto: UpdateItemDto,
    ): Promise<Cart & { items: CartItem[] }> {
        if (updateItemDto.quantity === 0) {
            return await this.removeItemService.execute(userId, updateItemDto);
        } else {
            return await this.addItemService.execute(userId, updateItemDto);
        }
    }
}
