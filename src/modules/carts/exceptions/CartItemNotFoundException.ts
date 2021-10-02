import { NotFoundException } from '@nestjs/common';

class CartItemNotFoundException extends NotFoundException {
    public constructor(id: string) {
        super(`Item com ID ${id} não encontrado`);
    }
}

export default CartItemNotFoundException;
