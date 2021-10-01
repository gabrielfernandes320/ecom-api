import { Test, TestingModule } from '@nestjs/testing';
import { USERS_REPOSITORY } from '../infra/prisma/repositories/UsersRepository';
import {
    mockUsersList,
    mockUsersRepository,
    UpdateUserDtoMock,
} from '../mocks/UserMockFactory';
import ShowUserService from './ShowUserService';

describe('ShowUserService', () => {
    let service: ShowUserService;
    const mockUserDto = UpdateUserDtoMock.build();

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ShowUserService,
                {
                    provide: USERS_REPOSITORY,
                    useValue: mockUsersRepository,
                },
            ],
        }).compile();

        service = module.get<ShowUserService>(ShowUserService);
    });

    describe('showUserService', () => {
        it('should return a user', async () => {
            expect(await service.execute(+mockUsersList[0].id)).toEqual(
                mockUsersList[0],
            );
        });
    });
});
