import { AccessTokenResponse, User, UserEditRequest, UserRegisterRequest, UserToken } from '@cms-models';
import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { AutheticationRepostiory } from "@cms-authentication-repository";
import { JwtService } from '@nestjs/jwt';
import { env } from 'process';
import { CommonFunctionsService } from '@cms-common-functions';

@Injectable()
export class AuthenticationService {
    constructor(
        private authenticationRepository: AutheticationRepostiory,
        private jwtService: JwtService,
        private currentUserService: CommonFunctionsService) { }

    async RegisterUser(newUser: UserRegisterRequest): Promise<User | BadRequestException> {
        const user = await this.authenticationRepository.RegisterUser(newUser);

        if (user) {
            return user;
        }
        else {
            throw new BadRequestException();
        }
    }

    async UserLogin(email: string, password: string): Promise<AccessTokenResponse> {

        if (email === "" || email === undefined || password === "" || password === undefined) {
            return {
                accessToken: "",
                refreshToken: ""
            };
        }

        const user = await this.authenticationRepository.GetUser(email);
        if (user) {
            const passwordHash = await bcrypt.hash(password, user.passwordSalt || "");
            if (passwordHash == user?.password) {
                const payload = { userId: user.id, email: user.email };
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

    async UpdatePassword(password: string, accessToken: string): Promise<boolean> {

        const user: UserToken | null = await this.currentUserService.GetUserToken(accessToken)

        const result = await this.authenticationRepository.UpdatePassword(password, user?.userId || "");

        if (result) {
            return true;
        }
        else {
            return false;
        }
    }

    async GetUser(email: string): Promise<User | NotFoundException> {
        const user = await this.authenticationRepository.GetUser(email);

        if (user) {
            return user;
        }
        else {
            throw new NotFoundException();
        }
    }

    async RefreshToken(email: string, refreshToken: string): Promise<AccessTokenResponse> {
        const user = await this.GetUser(email) as User;

        if (!user || !user.refreshToken) {
            return {
                accessToken: "",
                refreshToken: "",
            };
        }

        if (refreshToken != user.refreshToken) {
            return {
                accessToken: "",
                refreshToken: "",
            };
        }

        const payload: UserToken = { userId: user.id!, email: user.email! };
        const accessToken = await this.jwtService.signAsync(payload, {
            secret: env['JWT_SECRET'],
            expiresIn: env['JWT_SECRET_TIME']
        });

        return {
            accessToken: accessToken,
            refreshToken: refreshToken
        };
    }
}