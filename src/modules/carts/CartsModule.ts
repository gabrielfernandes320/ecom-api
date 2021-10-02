import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/DatabaseModule';
import { PrismaService } from '../database/services/PrismaService';
import { CartsController } from './infra/http/CartsController';
import providers from './providers';
import AddItemService from './services/AddItemService';
import RemoveItemService from './services/RemoveItemService';
import UpdateItemService from './services/UpdateItemService';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...[
            AddItemService,
            UpdateItemService,
            RemoveItemService,
            PrismaService,
        ],
        ...providers,
    ],
    controllers: [CartsController],
    exports: [...providers],
})
export class CartsModule {}
