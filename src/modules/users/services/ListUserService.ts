import { Inject, Injectable } from '@nestjs/common';
import ListUserDTO from '../dtos/ListUserDTO';
import { USERS_REPOSITORY } from '../infra/prisma/repositories/UsersRepository';
import IUsersRepository from '../repositories/IUsersRepository';

@Injectable()
export default class ListUserService {
    public constructor(
        @Inject(USERS_REPOSITORY)
        private usersRepository: IUsersRepository,
    ) {}

    public async execute(listUserDto: ListUserDTO): Promise<any> {
        return await this.usersRepository.findAll(listUserDto);
    }
}
