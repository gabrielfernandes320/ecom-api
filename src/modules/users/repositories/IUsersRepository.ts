import { Prisma, User } from '@prisma/client';
import IReadRepository from '../../database/repositories/IReadRepository';
import IWriteRepository from '../../database/repositories/IWriteRepository';
import ListUserDTO from '../dtos/ListUserDTO';
export default interface IUsersRepository
    extends IReadRepository<User>,
        IWriteRepository<User> {
    findAll(params: ListUserDTO): Promise<any>;

    create(data: Prisma.UserCreateInput): Promise<User>;

    update(id: string, user: Prisma.UserUpdateInput): Promise<User>;

    findByEmail(email: string): Promise<User>;
}
