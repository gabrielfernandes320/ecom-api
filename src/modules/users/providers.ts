import {
    UsersRepository,
    USERS_REPOSITORY,
} from './infra/prisma/repositories/UsersRepository';

export const providers = [
    { provide: USERS_REPOSITORY, useClass: UsersRepository },
];

export default providers;
