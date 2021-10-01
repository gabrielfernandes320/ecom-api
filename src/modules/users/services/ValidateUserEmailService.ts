import { User } from '.prisma/client';
import { Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY } from '../infra/prisma/repositories/UsersRepository';
import IUsersRepository from '../repositories/IUsersRepository';

@Injectable()
export default class ValidateUserEmailService {
    public constructor(
        @Inject(USERS_REPOSITORY)
        private usersRepository: IUsersRepository,
    ) {}

    public async execute(email: string): Promise<User> {
        return await this.usersRepository.findByEmail(email);
    }
}
