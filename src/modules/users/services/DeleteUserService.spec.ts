import { Test, TestingModule } from '@nestjs/testing';
import { USERS_REPOSITORY } from '../infra/prisma/repositories/UsersRepository';
import { UserMock } from '../mocks/UserMockFactory';
import DeleteUserService from './DeleteUserService';

describe('DeleteUserService', () => {
    let service: DeleteUserService;
    const mockUser = UserMock.build();

    const mockUsersRepository = {
        remove: jest.fn(async (id: number): Promise<void> => {
            id = id;

            return;
        }),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DeleteUserService,
                {
                    provide: USERS_REPOSITORY,
                    useValue: mockUsersRepository,
                },
            ],
        }).compile();

        service = module.get<DeleteUserService>(DeleteUserService);
    });

    describe('DeleteUserService', () => {
        it('should delete a user from the database', async () => {
            expect(await service.execute(mockUser.id)).toEqual(undefined);

            expect(mockUsersRepository.remove).toHaveBeenCalled();
        });
    });
});
