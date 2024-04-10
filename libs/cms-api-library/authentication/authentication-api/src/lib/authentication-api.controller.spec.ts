import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationApiController } from './authentication-api.controller';

describe('AuthenticationApiController', () => {
  let controller: AuthenticationApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticationApiController],
    }).compile();

    controller = module.get<AuthenticationApiController>(
      AuthenticationApiController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
