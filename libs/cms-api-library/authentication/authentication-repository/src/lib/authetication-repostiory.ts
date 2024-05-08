import { PrismaClient } from "@prisma/client";
import { User, UserEditRequest, UserRegisterRequest } from "@cms-models";
import * as bcrypt from "bcrypt";
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class AutheticationRepostiory {

    constructor(private prisma : PrismaClient) {
    }

    async RegisterUser(user: UserRegisterRequest): Promise<User> {

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(user.password, salt);

        this.prisma.$connect();
        let result = await this.prisma.user.create({
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

        this.prisma.$disconnect();
        return result;
    }

    async GetUser(email: string): Promise<User | null> {
        this.prisma.$connect();
        const user = await this.prisma.user.findUnique({
            where: {
                email: email
            }
        })
        Logger.log(user)
        this.prisma.$disconnect();
        return user;
    }

    async EditUser(user: UserEditRequest): Promise<User> {
        this.prisma.$connect();
        let result = await this.prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                name: user.name,
                surname: user.surname,
                mobileNumber: user.mobileNumber,
            }
        });

        this.prisma.$disconnect();
        return result;
    }

    async UpdatePassword(password: string, userId: string): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        this.prisma.$connect();
        let result = await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                password: hashPassword,
                passwordSalt: salt
            }
        });

        this.prisma.$disconnect();
        return result;
    }

    async UpdateRefreshToken(email:string, refreshToken: string) : Promise<User>
    {
        this.prisma.$connect()
        let result = await this.prisma.user.update({
            where: {
                email : email,
            },
            data:{
                refreshToken : refreshToken,
            },
        })

        this.prisma.$disconnect();
        return result;
    }
}
