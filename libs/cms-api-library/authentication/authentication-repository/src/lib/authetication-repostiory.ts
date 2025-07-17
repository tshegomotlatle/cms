import { User, UserEditRequest, UserRegisterRequest, UserMobileEditRequest } from "@cms-models";
import { Injectable, Logger } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class AutheticationRepostiory {
    async EditMobileNumber(user: UserMobileEditRequest): Promise<boolean> {
        try {
            await this.prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    mobileNumber: user.mobileNumber,
                }
            });
            return true;
        } catch (error) {
            Logger.error(error);
            return false;
        }
    }

    constructor(private prisma: PrismaClient) { }

    async RegisterUser(user: UserRegisterRequest): Promise<User | null> {
        try {

            return await this.prisma.user.create({
                data: {
                    email: user.email,
                    name: user.name,
                    surname: user.surname,
                    mobileNumber: user.mobileNumber,
                    password: "",
                    passwordSalt: "",
                    refreshToken: ""
                }
            });
        } catch (error) {
            Logger.error(error)
            return null;
        }
    }

    async GetUser(email: string): Promise<User | null> {
        try {
            return await this.prisma.user.findUnique({
                where: {
                    email: email
                },
                include: {
                    courtCases: true
                }
            })
        } catch (error) {
            Logger.error(error)
            return null;
        }
    }

    async EditUser(user: UserEditRequest): Promise<User | null> {
        try {
            return await this.prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    name: user.name,
                    surname: user.surname,
                    mobileNumber: user.mobileNumber,
                }
            });
        } catch (error) {
            Logger.error(error)
            return null;
        }
    }

    async DeleteUser(email: string): Promise<User | null> {
        try {
            return await this.prisma.user.delete({
                where: {
                    email: email,
                }
            })
        } catch (error) {
            Logger.error(error)
            return null;
        }
    }
    
}
