import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationApiController } from './authentication-api.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationService } from '@cms-authentication-service';
import { AutheticationRepostiory } from '@cms-authentication-repository';
import { Prisma, PrismaClient } from '@prisma/client';

describe('AuthenticationApiController', () => {
  let controller: AuthenticationApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticationApiController],
      imports: [JwtModule, PrismaClient],
      providers: [AuthenticationService, AutheticationRepostiory, JwtModule, PrismaClient]
    }).compile();

    controller = module.get<AuthenticationApiController>(
      AuthenticationApiController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
