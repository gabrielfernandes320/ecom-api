import { Test, TestingModule } from '@nestjs/testing';
import { plainToClass } from 'class-transformer';
import { USERS_REPOSITORY } from '../../users/infra/prisma/repositories/UsersRepository';
import {
    mockUsersList,
    mockUsersRepository,
    UpdateUserDtoMock,
} from '../mocks/UserMockFactory';
import UpdateUserService from './UpdateUserService';

describe('DeleteUserService', () => {
    let service: UpdateUserService;
    const mockUserDto = UpdateUserDtoMock.build();

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UpdateUserService,
                {
                    provide: USERS_REPOSITORY,
                    useValue: mockUsersRepository,
                },
            ],
        }).compile();

        service = module.get<UpdateUserService>(UpdateUserService);
    });

    describe('updateUserService', () => {
        it('should update and return the user', async () => {
            expect(
                await service.execute(+mockUsersList[0].id, mockUserDto),
            ).toEqual(plainToClass(User, mockUserDto));
        });
    });
});
