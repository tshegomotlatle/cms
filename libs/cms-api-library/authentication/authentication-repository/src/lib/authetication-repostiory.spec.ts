import { PrismaClient } from '@prisma/client';
import { AutheticationRepostiory } from './authetication-repostiory';

describe('AutheticationRepostiory', () => {
  it('should be defined', () => {
    expect(new AutheticationRepostiory(new PrismaClient())).toBeDefined();
  });
});
