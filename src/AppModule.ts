import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/AuthModule';
import { CartsModule } from './modules/carts/CartsModule';
import { DatabaseModule } from './modules/database/DatabaseModule';
import { ProductsModule } from './modules/products/ProductsModule';
import { UsersModule } from './modules/users/UsersModule';

@Module({
    imports: [
        ConfigModule.forRoot({
            validationSchema: Joi.object({
                DB_HOST: Joi.string().required(),
                DB_PORT: Joi.number().required(),
                DB_USER: Joi.string().required(),
                DB_NAME: Joi.string().required(),
                PORT: Joi.number(),
            }),
        }),
        DatabaseModule,
        UsersModule,
        AuthModule,
        ProductsModule,
        CartsModule,
    ],

    controllers: [],
    providers: [],
})
export class AppModule {}
