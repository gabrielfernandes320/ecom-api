import { NotFoundException } from '@nestjs/common';

class UserCartNotFoundException extends NotFoundException {
    public constructor(id: string) {
        super(`Carrinho para o usuário ${id} não encontrado`);
    }
}

export default UserCartNotFoundException;
