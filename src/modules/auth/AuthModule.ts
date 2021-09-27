import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import AppConfigService from '../config/services/AppConfigService';
import AuthConfigService from '../config/services/AuthConfigService';
import JwtConfigService from '../config/services/JwtConfigService';
import { UsersModule } from '../users/UsersModule';
import { JwtStrategy } from './strategies/JwtStrategy';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: {
                    expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
                },
            }),
        }),
    ],
    providers: [
        AppConfigService,
        AuthConfigService,
        ConfigService,
        JwtStrategy,
        JwtConfigService,
    ],
    controllers: [],
})
export class AuthModule {}
