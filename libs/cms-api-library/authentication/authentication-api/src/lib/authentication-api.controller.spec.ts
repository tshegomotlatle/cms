import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationApiController } from './authentication-api.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthenticationService } from '@cms-authentication-service';
import { AutheticationRepostiory } from '@cms-authentication-repository';
import { Prisma, PrismaClient } from '@prisma/client';
import { UpdatePasswordRequest, User, UserEditRequest, UserEmailRequest, UserLoginRequest, UserRegisterRequest } from '@cms-models';
import { CurrentUserService } from './CurrentUser/current-user.service';

describe('AuthenticationApiController', () => {
  let controller: AuthenticationApiController;
  let authService: AuthenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticationApiController],
      providers: [AuthenticationService, AutheticationRepostiory, JwtService, PrismaClient, CurrentUserService],
    }).compile();

    controller = module.get<AuthenticationApiController>(AuthenticationApiController);
    authService = module.get<AuthenticationService>(AuthenticationService);
  });

  it('should return accessToken and refreshToken for valid credentials', async () => {
    const userLoginRequest: UserLoginRequest =
    {
      email: 'test@example.com',
      password: 'password123'
    };

    jest.spyOn(authService, 'UserLogin').mockResolvedValue({ accessToken: 'validToken', refreshToken: 'validRefreshToken' });

    const result = await controller.login(userLoginRequest);

    expect(result.accessToken).toEqual('validToken');
    expect(result.refreshToken).toEqual('validRefreshToken');
  });

  it('should return null for invalid credentials', async () => {
    const userLoginRequest: UserLoginRequest =
    {
      email: 'test@example.com',
      password: 'password123'
    };

    jest.spyOn(authService, 'UserLogin').mockResolvedValue({ accessToken: '', refreshToken: '' });

    const result = await controller.login(userLoginRequest);

    expect(result.accessToken).toEqual('');
    expect(result.refreshToken).toEqual('');
  });

  it("should register a user", async () => {
    const userRegisterRequest: UserRegisterRequest = {
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
      name: "Tshego",
      surname: "Motlatle",
      password: "2455",
    }

    jest.spyOn(authService, 'RegisterUser').mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
      name: "Tshego",
      surname: "Motlatle",
      password: "2455",
    });

    const result = await controller.register(userRegisterRequest);

    expect(result).toEqual({ id: "1234", email: "tshegomotlatle.dev@gmail.com", mobileNumber: "0812198232", name: "Tshego", surname: "Motlatle", password: "2455" });
  })

  it("should get a user based on email", async () => {
    const userEmailRequest: UserEmailRequest = {
      email: "tshegomotlatle.dev@gmail.com",
    }

    jest.spyOn(authService, 'GetUser').mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
      name: "Tshego",
      surname: "Motlatle",
      password: "2455",
    });

    const user = await controller.getUser(userEmailRequest) as User;

    expect(user).toBeDefined();
    expect(user!.email).toEqual("tshegomotlatle.dev@gmail.com");
  })

  it("should edit a user", async () => {
    const userEditRequest: UserEditRequest = {
      mobileNumber: "0812198232",
      name: "Tshego",
      surname: "Motlatle",
      id: "1234",
    }

    jest.spyOn(authService, 'EditUser').mockResolvedValue(true);

    const result = await controller.editUser(userEditRequest);
    expect(result).toBeTruthy();
  })

  it("should update password", async () => {
    const UpdatePasswordRequest: UpdatePasswordRequest = {
      password: "1234",
    }

    jest.spyOn(authService, 'UpdatePassword').mockResolvedValue(true);

    const result = await controller.updatePassword(UpdatePasswordRequest, {
      authorization: "ACCESS_TOKEN_TEST_VALUE",
    });
    expect(result).toBeTruthy();
  })

  it("should get a refresh token", async () => {
    const refreshTokenRequest = {
      email: "tshegomotlatle.dev@gmail.com",
      refreshToken: "REFRESH_TOKEN_TEST_VALUE",
    }

    jest.spyOn(authService, 'RefreshToken').mockResolvedValue({
      accessToken: "ACCESS_TOKEN_TEST_VALUE",
      refreshToken: "REFRESH_TOKEN_TEST_VALUE",
    });

    const result = await controller.refreshToken(refreshTokenRequest);

    expect(result.accessToken).toEqual("ACCESS_TOKEN_TEST_VALUE");
  })
});
