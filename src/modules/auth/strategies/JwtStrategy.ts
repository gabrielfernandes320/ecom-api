import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import IUsersRepository from 'src/modules/users/repositories/IUsersRepository';
import { USERS_REPOSITORY } from '../../users/infra/prisma/repositories/UsersRepository';
import ShowLoggedUserService from '../../users/services/ShowLoggedUserService';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    public constructor(
        private configService: ConfigService,
        @Inject(USERS_REPOSITORY)
        private usersRepository: IUsersRepository,
        private showLoggedUserService: ShowLoggedUserService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => request?.cookies?.Authentication,
            ]),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
        });
    }

    public async validate(payload: any) {
        console.log(payload);

        return payload;
    }
}
