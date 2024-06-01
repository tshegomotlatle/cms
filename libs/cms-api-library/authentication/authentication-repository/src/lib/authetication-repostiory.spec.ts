import { PrismaClient } from '@prisma/client';
import { AutheticationRepostiory } from './authetication-repostiory';
import { User, UserEditRequest, UserRegisterRequest } from '@cms-models';

describe('AutheticationRepostiory', () => {

  it('should be defined', () => {
    expect(new AutheticationRepostiory(new PrismaClient())).toBeDefined();
  });

  it('should get a user based on email', async () => {
    const authRepo = new AutheticationRepostiory(new PrismaClient());
    const user = await authRepo.GetUser("tshegomotlatle.dev@gmail.com");
    expect(user).toBeDefined();
  });

  it('should get a user and check its values', async () => {
    const authRepo = new AutheticationRepostiory(new PrismaClient());
    const user = await authRepo.GetUser("tshegomotlatle.dev@gmail.com");
    expect(user?.email).toEqual("tshegomotlatle.dev@gmail.com");
    expect(user?.name).toEqual("Tshego");
    expect(user?.surname).toEqual("Motlatle");
    expect(user?.mobileNumber).toEqual("0812198232");
  });

  it('should register a new user', async () => {
    const authRepo = new AutheticationRepostiory(new PrismaClient());
    const newUser: UserRegisterRequest = {
      email: "mokgethwamatlala@gmail.com",
      mobileNumber: "0844121245",
      name: "Mokgethwa",
      surname: "Matlala",
      password: "2455",
    }
    await authRepo.DeleteUser("mokgethwamatlala@gmail.com")
    const user = await authRepo.RegisterUser(newUser);
    expect(user).toBeDefined();
    expect(user.email).toEqual("mokgethwamatlala@gmail.com");
    expect(user.mobileNumber).toEqual("0844121245");
    expect(user.name).toEqual("Mokgethwa");
    expect(user.surname).toEqual("Matlala");

  });

  it('should edit a new user', async () => {
    const authRepo = new AutheticationRepostiory(new PrismaClient());
    const newUser: UserRegisterRequest = {
      email: "mokgethwamatlala@gmail.com",
      mobileNumber: "0844121245",
      name: "Mokgethwa",
      surname: "Matlala",
      password: "2455",
    }
    await authRepo.DeleteUser("mokgethwamatlala@gmail.com")
    const user = await authRepo.RegisterUser(newUser);
    const editUserRequest: UserEditRequest = {
      mobileNumber: "0855569856",
      id: user.id!,
      name: "Tshego",
      surname: "Motlatle",
    }

    const editedUser = await authRepo.EditUser(editUserRequest)
    expect(editedUser.email).toEqual("mokgethwamatlala@gmail.com");
    expect(editedUser.mobileNumber).toEqual("0855569856");
    expect(editedUser.name).toEqual("Tshego");
    expect(editedUser.surname).toEqual("Motlatle");
  });

  it('should update a users password', async () => {
    const authRepo = new AutheticationRepostiory(new PrismaClient());
    const newUser: UserRegisterRequest = {
      email: "mokgethwamatlala@gmail.com",
      mobileNumber: "0844121245",
      name: "Mokgethwa",
      surname: "Matlala",
      password: "2455",
    }
    await authRepo.DeleteUser("mokgethwamatlala@gmail.com")
    const user = await authRepo.RegisterUser(newUser);

    const updatedUser = await authRepo.UpdatePassword("7555", user.id!);
    expect(updatedUser).toBeDefined();
    expect(updatedUser.email).toEqual("mokgethwamatlala@gmail.com");
    expect(updatedUser.mobileNumber).toEqual("0844121245");
    expect(updatedUser.name).toEqual("Mokgethwa");
    expect(updatedUser.surname).toEqual("Matlala");
  });

  it('should update a users refresh token', async () => {
    const authRepo = new AutheticationRepostiory(new PrismaClient());
    const newUser: UserRegisterRequest = {
      email: "mokgethwamatlala@gmail.com",
      mobileNumber: "0844121245",
      name: "Mokgethwa",
      surname: "Matlala",
      password: "2455",
    }
    await authRepo.DeleteUser("mokgethwamatlala@gmail.com")
    await authRepo.RegisterUser(newUser);

    const updatedUser = await authRepo.UpdateRefreshToken("mokgethwamatlala@gmail.com", "REFRESH_TOKEN_TEST_VALUE"!);
    expect(updatedUser).toBeDefined();
    expect(updatedUser.email).toEqual("mokgethwamatlala@gmail.com");
    expect(updatedUser.mobileNumber).toEqual("0844121245");
    expect(updatedUser.name).toEqual("Mokgethwa");
    expect(updatedUser.surname).toEqual("Matlala");
    expect(updatedUser.refreshToken).toEqual("REFRESH_TOKEN_TEST_VALUE");
  });

  it('should update a delete a user', async () => {
    const authRepo = new AutheticationRepostiory(new PrismaClient());

    await authRepo.DeleteUser("mokgethwamatlala@gmail.com")

    const user = await authRepo.GetUser("mokgethwamatlala@gmail.com");
    expect(user).toBeNull();
  });


});
