import { NotFoundException } from '@nestjs/common';

class ProductNotFoundException extends NotFoundException {
    public constructor(id: string) {
        super(`Produto com ID ${id} não encontrado`);
    }
}

export default ProductNotFoundException;
