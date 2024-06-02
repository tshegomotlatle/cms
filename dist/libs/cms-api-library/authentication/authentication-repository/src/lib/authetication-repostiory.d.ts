import { PrismaClient } from "@prisma/client";
import { User, UserEditRequest, UserRegisterRequest } from "@cms-models";
export declare class AutheticationRepostiory {
    private prisma;
    constructor(prisma: PrismaClient);
    RegisterUser(user: UserRegisterRequest): Promise<User>;
    GetUser(email: string): Promise<User | null>;
    EditUser(user: UserEditRequest): Promise<User>;
    UpdatePassword(password: string, userId: string): Promise<User>;
    UpdateRefreshToken(email: string, refreshToken: string): Promise<User>;
    DeleteUser(email: string): Promise<User>;
}
