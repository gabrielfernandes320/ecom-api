import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/AuthModule';
import { DatabaseModule } from './modules/database/DatabaseModule';
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
    ],

    controllers: [],
    providers: [],
})
export class AppModule {}
