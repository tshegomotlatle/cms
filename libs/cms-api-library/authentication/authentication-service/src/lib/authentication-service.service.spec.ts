import { Test } from '@nestjs/testing';
import { AuthenticationService } from './authentication-service.service';
import { AutheticationRepostiory } from '@cms-authentication-repository';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { UserEditRequest, UserLoginRequest, UserRegisterRequest } from '@cms-models';
import * as bcrypt from "bcrypt";


describe('AuthenticationServiceService', () => {
  let authenticationService: AuthenticationService;
  let authenticationRepositoryMock: DeepMockProxy<AutheticationRepostiory>;
  let jwtServiceMock: DeepMockProxy<JwtService>;
  let prisma: DeepMockProxy<PrismaClient>;

  beforeEach(() => {
    authenticationRepositoryMock = mockDeep<AutheticationRepostiory>();
    jwtServiceMock = mockDeep<JwtService>();
    prisma = mockDeep<PrismaClient>();


    authenticationService = new AuthenticationService(authenticationRepositoryMock, jwtServiceMock);
  });

  it('should be defined', () => {
    expect(authenticationService).toBeTruthy();
  });

  it('should register a user', async () => {
    const userRegisterRequest: UserRegisterRequest = {
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
      name: "Tshego",
      surname: "Motlatle",
      password: "2455",
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
    expect(user).toBeDefined();
    expect(user.email).toEqual("tshegomotlatle.dev@gmail.com");
    expect(user.mobileNumber).toEqual("0812198232");
    expect(user.name).toEqual("Tshego");
    expect(user.surname).toEqual("Motlatle");
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

    const user = await authenticationService.GetUser("tshegomotlatle.dev@gmail.com");
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

  it('should update password', async () => {
    authenticationRepositoryMock.UpdatePassword.mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      name: "Tshego",
      surname: "Motlatle",
      mobileNumber: "0812198232",
      password: "2455",
    });

    const result = await authenticationService.UpdatePassword("1234", "1234");
    expect(result).toBeTruthy();
  });

  it('should login a user', async () => {
    const loginUserRequest: UserLoginRequest = {
      email: "tshegomotlatle.dev@gmail.com",
      password: "2455",
    }

    authenticationRepositoryMock.GetUser.mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      name: "Tshego",
      surname: "Motlatle",
      mobileNumber: "0812198232",
      password: "2455",
      passwordSalt: "$2b$10$.PsL4O/JxYPCyL2juX5B/.",
    });

    authenticationRepositoryMock.UpdateRefreshToken.mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      name: "Tshego",
      surname: "Motlatle",
      mobileNumber: "0812198232",
      password: "2455",
      passwordSalt: "$2b$10$.PsL4O/JxYPCyL2juX5B/.",
      refreshToken: "REFRESH_TOKEN_TEST_VALUE",
    });
    const result = await authenticationService.UserLogin(loginUserRequest.email, loginUserRequest.password);
    expect(result).toBeTruthy();
    expect(result.accessToken).toBeDefined();
    expect(result.refreshToken).toBeDefined();
  });

  it('should refresh token', async () => {
    const email = "tshegomotlatle.dev@gmail.com";
    const refreshToken = "REFRESH_TOKEN_TEST_VALUE";

    authenticationRepositoryMock.GetUser.mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      name: "Tshego",
      surname: "Motlatle",
      mobileNumber: "0812198232",
      password: "2455",
      passwordSalt: "$2b$10$.PsL4O/JxYPCyL2juX5B/.",
      refreshToken: "REFRESH_TOKEN_TEST_VALUE",
    });

  });
});
