import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/DatabaseModule';
import { PrismaService } from '../database/services/PrismaService';
import { ProductsController } from './infra/http/ProductsController';
import providers from './providers';
import CreateProductService from './services/CreateProductService';
import DeleteProductService from './services/DeleteProductService';
import ListProductService from './services/ListProductService';
import ShowProductService from './services/ShowProductService';
import UpdateProductService from './services/UpdateProductService';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...[
            ShowProductService,
            CreateProductService,
            UpdateProductService,
            ListProductService,
            DeleteProductService,
            PrismaService,
        ],
        ...providers,
    ],
    controllers: [ProductsController],
    exports: [...providers],
})
export class ProductsModule {}
