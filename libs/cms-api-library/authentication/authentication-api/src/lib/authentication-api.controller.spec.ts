import { AutheticationRepostiory } from '@cms-authentication-repository';
import { AuthenticationService } from '@cms-authentication-service';
import { CommonFunctionsService } from '@cms-common-functions';
import { User, UserEditRequest, UserEmailRequest } from '@cms-models';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { AuthenticationApiController } from './authentication-api.controller';

describe('AuthenticationApiController', () => {
  let controller: AuthenticationApiController;
  let authService: AuthenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticationApiController],
      providers: [AuthenticationService, AutheticationRepostiory, PrismaClient, CommonFunctionsService, JwtService],
    }).compile();

    controller = module.get<AuthenticationApiController>(AuthenticationApiController);
    authService = module.get<AuthenticationService>(AuthenticationService);
  });


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

  it("should edit a user mobile number", async () => {
    const userEditRequest: UserEditRequest = {
      mobileNumber: "0812198232",
      name: "Tshego",
      surname: "Motlatle",
      id: "1234",
    }

    jest.spyOn(authService, 'EditMobileNumber').mockResolvedValue(true);

    const result = await controller.editMobileNumber(userEditRequest);
    expect(result).toBeTruthy();
  });
});
