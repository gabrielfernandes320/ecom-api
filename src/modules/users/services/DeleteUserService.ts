import { Inject, Injectable } from '@nestjs/common';
import IUsersRepository from '../repositories/IUsersRepository';

@Injectable()
export default class DeleteUserService {
    public constructor(
        @Inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async execute(id: string) {
        await this.usersRepository.remove(id);
    }
}
