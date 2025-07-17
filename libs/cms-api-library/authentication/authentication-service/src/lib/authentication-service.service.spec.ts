import { AutheticationRepostiory } from '@cms-authentication-repository';
import { CommonFunctionsService } from '@cms-common-functions';
import { KeycloakRegisterRequest, User, UserEditRequest } from '@cms-models';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { AuthenticationService } from './authentication-service.service';


describe('AuthenticationServiceService', () => {
  let authenticationService: AuthenticationService;
  let authenticationRepositoryMock: DeepMockProxy<AutheticationRepostiory>;
  let jwtServiceMock: DeepMockProxy<JwtService>;
  let prisma: DeepMockProxy<PrismaClient>;
  let currentUserService: DeepMockProxy<CommonFunctionsService>;

  beforeEach(() => {
    authenticationRepositoryMock = mockDeep<AutheticationRepostiory>();
    jwtServiceMock = mockDeep<JwtService>();
    prisma = mockDeep<PrismaClient>();
    currentUserService = mockDeep<CommonFunctionsService>();

    authenticationService = new AuthenticationService(authenticationRepositoryMock);
    currentUserService.GetUserToken.mockReturnValue({
      userId: '123456',
      email: 'test',
    });
  });

  it('should be defined', () => {
    expect(authenticationService).toBeTruthy();
  });

  it('should register a user', async () => {
    const userRegisterRequest: KeycloakRegisterRequest = {
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
      name: "Tshego",
      surname: "Motlatle",
      password: "2455",
      realm: "test-realm",
      userId: "test-client",
    }

    authenticationRepositoryMock.RegisterUser.mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
      name: "Tshego",
      surname: "Motlatle",
      password: "2455",
    });

    const user = await authenticationService.RegisterUser(userRegisterRequest);
    expect(user).toBeTruthy();
  });

  it('should get a user based on email', async () => {
    authenticationRepositoryMock.GetUser.mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      name: "Tshego",
      surname: "Motlatle",
      mobileNumber: "0812198232",
      password: "2455",
    })

    const user = await authenticationService.GetUser("tshegomotlatle.dev@gmail.com") as User;
    expect(user).toBeDefined();
    expect(user?.email).toEqual("tshegomotlatle.dev@gmail.com");
    expect(user?.name).toEqual("Tshego");
    expect(user?.surname).toEqual("Motlatle");
    expect(user?.mobileNumber).toEqual("0812198232");
  });

  it('should edit a user', async () => {
    const editUserRequest: UserEditRequest = {
      id: "1234",
      mobileNumber: "0812198232",
      name: "Tshego",
      surname: "Motlatle",
    }

    authenticationRepositoryMock.EditUser.mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      name: "Tshego",
      surname: "Motlatle",
      mobileNumber: "0812198232",
      password: "2455",
    });

    const result = await authenticationService.EditUser(editUserRequest);
    expect(result).toBeTruthy();
  });
});
