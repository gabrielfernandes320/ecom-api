import { User } from '.prisma/client';
import { Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY } from '../infra/prisma/repositories/UsersRepository';
import IUsersRepository from '../repositories/IUsersRepository';

@Injectable()
export default class ShowUserService {
    public constructor(
        @Inject(USERS_REPOSITORY)
        private usersRepository: IUsersRepository,
    ) {}

    public async execute(id: string): Promise<User> {
        return await this.usersRepository.findById(id);
    }
}
