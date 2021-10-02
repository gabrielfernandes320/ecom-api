import {
    CartsRepository,
    CARTS_REPOSITORY,
} from './infra/prisma/repositories/CartsRepository';

export const providers = [
    { provide: CARTS_REPOSITORY, useClass: CartsRepository },
];

export default providers;
