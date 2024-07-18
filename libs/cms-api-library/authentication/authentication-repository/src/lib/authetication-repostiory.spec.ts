import { PrismaClient } from '@prisma/client';
import { AutheticationRepostiory } from './authetication-repostiory';
import { User, UserEditRequest, UserRegisterRequest } from '@cms-models';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

describe('AutheticationRepostiory', () => {
  let authRepo: AutheticationRepostiory;
  let prisma: DeepMockProxy<PrismaClient>;

  beforeEach(() => {
    prisma = mockDeep<PrismaClient>();
    authRepo = new AutheticationRepostiory(prisma);
  });

  it('should be defined', () => {
    expect(new AutheticationRepostiory(new PrismaClient())).toBeDefined();
  });

  it('should get a user based on email', async () => {
    prisma.user.findUnique.mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      name: "Tshego",
      surname: "Motlatle",
      mobileNumber: "0812198232",
      password: "2455",
      passwordSalt: "1234",
      refreshToken: "REFRESH_TOKEN_TEST_VALUE",
    })
    const user = await authRepo.GetUser("tshegomotlatle.dev@gmail.com");
    expect(user).toBeDefined();
    expect(user?.email).toEqual("tshegomotlatle.dev@gmail.com");
    expect(user?.name).toEqual("Tshego");
    expect(user?.surname).toEqual("Motlatle");
    expect(user?.mobileNumber).toEqual("0812198232");
    expect(user?.refreshToken).toEqual("REFRESH_TOKEN_TEST_VALUE");
  });

  it('should register a new user', async () => {
    const newUser: UserRegisterRequest = {
      email: "mokgethwamatlala@gmail.com",
      mobileNumber: "0844121245",
      name: "Mokgethwa",
      surname: "Matlala",
      password: "2455",
    }

    prisma.user.create.mockResolvedValue({
      id: "1234",
      email: "mokgethwamatlala@gmail.com",
      name: "Mokgethwa",
      surname: "Matlala",
      mobileNumber: "0844121245",
      password: "2455",
      passwordSalt: "1234",
      refreshToken: "REFRESH_TOKEN_TEST_VALUE",
    })

    const user = await authRepo.RegisterUser(newUser);
    expect(user).toBeDefined();
    expect(user?.email).toEqual("mokgethwamatlala@gmail.com");
    expect(user?.mobileNumber).toEqual("0844121245");
    expect(user?.name).toEqual("Mokgethwa");
    expect(user?.surname).toEqual("Matlala");
    expect(user?.refreshToken).toEqual("REFRESH_TOKEN_TEST_VALUE");
  });

  it('should edit a new user', async () => {
    const editUserRequest: UserEditRequest = {
      mobileNumber: "0855569856",
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
    }

    prisma.user.update.mockResolvedValue({
      id: "1234",
      email: "mokgethwamatlala@gmail.com",
      name: "Tshego",
      surname: "Motlatle",
      mobileNumber: "0855569856",
      password: "2455",
      passwordSalt: "1234",
      refreshToken: "REFRESH_TOKEN_TEST_VALUE",
    })

    const editedUser = await authRepo.EditUser(editUserRequest)
    expect(editedUser?.email).toEqual("mokgethwamatlala@gmail.com");
    expect(editedUser?.mobileNumber).toEqual("0855569856");
    expect(editedUser?.name).toEqual("Tshego");
    expect(editedUser?.surname).toEqual("Motlatle");
    expect(editedUser?.refreshToken).toEqual("REFRESH_TOKEN_TEST_VALUE");
  });

  it('should update a users password', async () => {

    prisma.user.update.mockResolvedValue({
      id: "1234",
      email: "mokgethwamatlala@gmail.com",
      name: "Mokgethwa",
      surname: "Matlala",
      mobileNumber: "0844121245",
      password: "7555",
      passwordSalt: "1234",
      refreshToken: "REFRESH_TOKEN_TEST_VALUE",
    })

    const updatedUser = await authRepo.UpdatePassword("7555", "1234");
    expect(updatedUser).toBeDefined();
    expect(updatedUser?.email).toEqual("mokgethwamatlala@gmail.com");
    expect(updatedUser?.mobileNumber).toEqual("0844121245");
    expect(updatedUser?.name).toEqual("Mokgethwa");
    expect(updatedUser?.surname).toEqual("Matlala");
  });

  it('should update a users refresh token', async () => {

    prisma.user.update.mockResolvedValue({
      id: "1234",
      email: "mokgethwamatlala@gmail.com",
      name: "Mokgethwa",
      surname: "Matlala",
      mobileNumber: "0844121245",
      password: "7555",
      passwordSalt: "1234",
      refreshToken: "new refresh buddy",
    })

    const updatedUser = await authRepo.UpdateRefreshToken("mokgethwamatlala@gmail.com", "new refresh buddy"!);
    expect(updatedUser).toBeDefined();
    expect(updatedUser?.refreshToken).toEqual("new refresh buddy");
  });

  it('should update a delete a user', async () => {

    prisma.user.delete.mockResolvedValue({
      id: "1234",
      email: "mokgethwamatlala@gmail.com",
      name: "Mokgethwa",
      surname: "Matlala",
      mobileNumber: "0844121245",
      password: "7555",
      passwordSalt: "1234",
      refreshToken: "new refresh buddy",
    })

    const deletedUser = await authRepo.DeleteUser("mokgethwamatlala@gmail.com");

    expect(deletedUser).toBeDefined();
    expect(deletedUser?.email).toEqual("mokgethwamatlala@gmail.com");
    expect(deletedUser?.mobileNumber).toEqual("0844121245");
    expect(deletedUser?.name).toEqual("Mokgethwa");
    expect(deletedUser?.surname).toEqual("Matlala");
    expect(deletedUser?.refreshToken).toEqual("new refresh buddy");
    expect(deletedUser?.id).toEqual("1234");
  });


});
