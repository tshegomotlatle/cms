import { Test } from '@nestjs/testing';
import { AuthenticationService } from './authentication-service.service';
import { AutheticationRepostiory } from '@cms-authentication-repository';
import { JwtModule } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';

describe('AuthenticationServiceService', () => {
  let service: AuthenticationService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AuthenticationService, AutheticationRepostiory, PrismaClient],
      imports: [JwtModule, PrismaClient]
    }).compile();

    service = module.get(AuthenticationService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
