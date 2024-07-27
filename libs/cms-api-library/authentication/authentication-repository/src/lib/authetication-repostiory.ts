import { PrismaClient } from "@prisma/client";
import { User, UserEditRequest, UserRegisterRequest } from "@cms-models";
import { Injectable, Logger } from "@nestjs/common";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AutheticationRepostiory {

    constructor(private prisma: PrismaClient) { }

    async RegisterUser(user: UserRegisterRequest): Promise<User | null> {
        try {
            const salt = await bcrypt.genSalt();
            const hashPassword = await bcrypt.hash(user.password, salt);

            return await this.prisma.user.create({
                data: {
                    email: user.email,
                    name: user.name,
                    surname: user.surname,
                    mobileNumber: user.mobileNumber,
                    password: hashPassword,
                    passwordSalt: salt,
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

    async UpdatePassword(password: string, userId: string): Promise<User | null> {
        try {
            const salt = await bcrypt.genSalt();
            const hashPassword = await bcrypt.hash(password, salt);

            return await this.prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    password: hashPassword,
                    passwordSalt: salt
                }
            });
        } catch (error) {
            Logger.error(error)
            return null;
        }
    }

    async UpdateRefreshToken(email: string, refreshToken: string): Promise<User | null> {
        try {
            return await this.prisma.user.update({
                where: {
                    email: email,
                },
                data: {
                    refreshToken: refreshToken,
                },
            })
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
