import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/DatabaseModule';
import { PrismaService } from '../database/services/PrismaService';
import providers from './providers';
import DeleteUserService from './services/DeleteUserService';
import ListUserService from './services/ListUserService';
import ShowUserByEmailService from './services/ShowUserByEmailService';
import ShowUserService from './services/ShowUserService';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...[
            ShowUserService,
            ListUserService,
            DeleteUserService,
            ShowUserByEmailService,
            PrismaService,
        ],
        ...providers,
    ],
    controllers: [],
    exports: [...[ShowUserByEmailService], ...providers],
})
export class UsersModule {}
