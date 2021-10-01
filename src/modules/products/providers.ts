import {
    ProductsRepository,
    PRODUCTS_REPOSITORY,
} from './infra/prisma/repositories/ProductsRepository';

export const providers = [
    { provide: PRODUCTS_REPOSITORY, useClass: ProductsRepository },
];

export default providers;
