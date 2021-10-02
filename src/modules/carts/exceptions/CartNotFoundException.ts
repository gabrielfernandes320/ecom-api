import { NotFoundException } from '@nestjs/common';

class CartNotFoundException extends NotFoundException {
    public constructor(id: string) {
        super(`Carrinho com ID ${id} não encontrado`);
    }
}

export default CartNotFoundException;
