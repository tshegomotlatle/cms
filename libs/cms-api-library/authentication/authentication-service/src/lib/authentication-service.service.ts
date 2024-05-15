import { User, UserEditRequest, UserRegisterRequest } from '@cms-models';
import { Injectable, Logger } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { AutheticationRepostiory } from "@cms-authentication-repository";
import { JwtService } from '@nestjs/jwt';
import { env } from 'process';

@Injectable()
export class AuthenticationService {
    constructor(
        private authenticationRepository: AutheticationRepostiory,
        private jwtService: JwtService) { }

    async RegisterUser(user: UserRegisterRequest): Promise<User> {
        return await this.authenticationRepository.RegisterUser(user);
    }

    async UserLogin(email: string, password: string): Promise<{ accessToken: string, refreshToken: string }> {

        Logger.log(email);
        Logger.log(password);
        if (email === "" || email === undefined || password === "" || password === undefined)
        {
            return {
                accessToken: "",
                refreshToken: ""
            };
        }

        const user = await this.authenticationRepository.GetUser(email);
        Logger.log(user);
        if (user) {
            const passwordHash = await bcrypt.hash(password, user?.password);
            if (passwordHash == user?.password) {
                const payload = { userId: user.id, username: user.email };
                const accessToken = await this.jwtService.signAsync(payload, {
                    secret: env['JWT_SECRET'],
                    expiresIn: env['JWT_SECRET_TIME']
                });
                const refreshToken = await this.jwtService.signAsync(payload, {
                    secret: env['JWT_SECRET_REFRESH'],
                    expiresIn: env['JWT_SECRET_TIME_REFRESH']
                });
                this.authenticationRepository.UpdateRefreshToken(user.email, refreshToken);
                return {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                };
            }
        }

        return {
            accessToken: "",
            refreshToken: ""
        };
    }

    async CheckEmailExists(email: string): Promise<boolean> {

        const user = await this.authenticationRepository.GetUser(email);

        if (user) {
            return true;
        }
        else {
            return false;
        }
    }

    async EditUser(user: UserEditRequest): Promise<boolean> {

        const result = await this.authenticationRepository.EditUser(user);

        if (result) {
            return true;
        }
        else {
            return false;
        }
    }

    async UpdatePassword(password: string, userId: string): Promise<boolean> {

        const result = await this.authenticationRepository.UpdatePassword(password, userId)

        if (result) {
            return true;
        }
        else {
            return false;
        }
    }

    async GetUser(email: string): Promise<User | null> {        
        return await this.authenticationRepository.GetUser(email);
    }

    async RefreshToken(email: string, refreshToken: string): Promise<{ accessToken: string}> {
        const user = await this.GetUser(email);

        if (!user || !user.refreshToken) {
            return {
                accessToken: "",
            };
        }

        if (refreshToken != user.refreshToken)
        {
            return {
                accessToken: "",
            };
        }

        const payload = { userId: user.id, username: user.email };
        const accessToken = await this.jwtService.signAsync(payload, {
            secret: env['JWT_SECRET'],
            expiresIn: env['JWT_SECRET_TIME']
        });

        return {
            accessToken: accessToken,
        };
    }
}