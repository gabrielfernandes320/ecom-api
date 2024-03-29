import { Prisma, User } from '.prisma/client';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/services/PrismaService';
import ListUserDTO from '../../../dtos/ListUserDTO';
import EmailAlreadyExistsException from '../../../exceptions/EmailAlreadyExistsException';
import UserNotFoundException from '../../../exceptions/UserNotFoundException';
import IUsersRepository from '../../../repositories/IUsersRepository';

@Injectable()
export class UsersRepository implements IUsersRepository {
    public constructor(
        private prisma: PrismaService,
        private httpService: HttpService,
    ) {}

    public async findAll(params: ListUserDTO): Promise<any> {
        const { order, perPage, page, search } = params;

        return await this.prisma.user.findMany({
            skip: perPage * (page - 1),
            take: perPage,
            orderBy: { id: order },
            where: search ? { email: { contains: search } } : {},
        });
    }

    public async findById(id: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: { id },
            include: { address: true },
        });

        if (!user) {
            throw new UserNotFoundException(id);
        }

        return user;
    }

    public async remove(id: string): Promise<void> {
        const affected: any = await this.prisma.user.delete({ where: { id } });

        if (affected.count === 0) {
            throw new UserNotFoundException(id);
        }
    }

    public async create(data: Prisma.UserCreateInput): Promise<User> {
        const emailAlreadyExist = await this.findByEmail(data.email);

        if (emailAlreadyExist) {
            throw new EmailAlreadyExistsException(data.email);
        }

        return await this.prisma.user.create({ data });
    }

    public async update(
        id: string,
        data: Prisma.UserUpdateInput,
    ): Promise<User> {
        const affected = await this.prisma.user.updateMany({
            where: { id },
            data,
        });

        if (affected.count === 0) {
            throw new UserNotFoundException(id);
        }

        return this.findById(id);
    }

    public async findByEmail(email: string): Promise<User> {
        return await this.prisma.user.findUnique({
            where: { email },
        });
    }
}

export const USERS_REPOSITORY = 'USERS_REPOSITORY';
