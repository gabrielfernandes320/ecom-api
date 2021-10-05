import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export default class ShowLoggedUserService {
    public constructor(private httpService: HttpService) {}

    public async execute() {
        try {
            const response = await lastValueFrom(
                this.httpService.get('api/v1/auth/user'),
            );

            return response.data;
        } catch (error) {
            throw new BadRequestException(
                'Cannot connect to the authentication microservice',
            );
        }
    }
}
