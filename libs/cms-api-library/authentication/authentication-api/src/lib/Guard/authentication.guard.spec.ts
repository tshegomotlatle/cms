import { JwtService } from '@nestjs/jwt';
import { AuthenticationGuard } from './authentication.guard';

describe('AuthenticationGuardGuard', () => {
  it('should be defined', () => {
    expect(new AuthenticationGuard(new JwtService())).toBeDefined();
  });
});
