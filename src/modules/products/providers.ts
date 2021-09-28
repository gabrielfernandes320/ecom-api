import { ProductsRepository } from './infra/prisma/repositories/ProductsRepository';

export const providers = [
    { provide: 'ProductsRepository', useClass: ProductsRepository },
];

export default providers;
