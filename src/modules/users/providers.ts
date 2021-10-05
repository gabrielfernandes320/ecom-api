import {
    UsersRepository,
    USERS_REPOSITORY,
} from './infra/prisma/repositories/UsersRepository';
import ShowLoggedUserService from './services/ShowLoggedUserService';

export const providers = [
    { provide: USERS_REPOSITORY, useClass: UsersRepository },
    ShowLoggedUserService,
];

export default providers;
