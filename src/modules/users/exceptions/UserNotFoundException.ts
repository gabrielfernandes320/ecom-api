import { NotFoundException } from '@nestjs/common';

class UserNotFoundException extends NotFoundException {
    public constructor(id: string) {
        super(`Usuário com ID ${id} não encontrado`);
    }
}

export default UserNotFoundException;
