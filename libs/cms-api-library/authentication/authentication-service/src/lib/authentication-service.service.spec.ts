import { Test } from '@nestjs/testing';
import { AuthenticationServiceService } from './authentication-service.service';

describe('AuthenticationServiceService', () => {
  let service: AuthenticationServiceService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AuthenticationServiceService],
    }).compile();

    service = module.get(AuthenticationServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
