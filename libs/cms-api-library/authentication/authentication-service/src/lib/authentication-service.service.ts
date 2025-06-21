import { AccessTokenResponse, KeycloakRegisterRequest, User, UserEditRequest, UserRegisterRequest, UserToken } from '@cms-models';
import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { AutheticationRepostiory } from "@cms-authentication-repository";
import { JwtService } from '@nestjs/jwt';
import { env } from 'process';
import { CommonFunctionsService } from '@cms-common-functions';
import { log } from 'console';

@Injectable()
export class AuthenticationService {
    constructor(
        private authenticationRepository: AutheticationRepostiory,
        private jwtService: JwtService,
        private currentUserService: CommonFunctionsService) { }

    async RegisterUser(newUser: KeycloakRegisterRequest): Promise<boolean | BadRequestException> {

        const userDetails = new UserRegisterRequest();
        userDetails.email = newUser.email;
        userDetails.name = newUser.name;
        userDetails.surname = newUser.surname;
        userDetails.mobileNumber = newUser.mobileNumber || "";
        userDetails.password = newUser.password || "";

        const user = await this.authenticationRepository.RegisterUser(userDetails);
        if (user) {
            return true;
        }
        else {
            throw new BadRequestException();
        }
    }

    async UserLogin(email: string, password: string): Promise<AccessTokenResponse | BadRequestException> {

        if (email === "" || email === undefined || password === "" || password === undefined) {
            return new BadRequestException();
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

        return new BadRequestException();
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

    async RefreshToken(refreshToken: string): Promise<AccessTokenResponse | BadRequestException> {

        const userToken: UserToken | null = await this.currentUserService.GetUserToken(refreshToken);

        const user = await this.GetUser(userToken?.email || "") as User;

        if (!user || !user.refreshToken) {
            return new BadRequestException();
        }

        if (refreshToken != user.refreshToken) {
            return new BadRequestException();
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

    async GetKeyCloakUser(newUser: KeycloakRegisterRequest) : Promise<UserRegisterRequest | NotFoundException> {
        const user = await this.authenticationRepository.GetKeyCloakUser(newUser);
        Logger.error("User details from Keycloak: ");
        Logger.error(user);
        if (user) {

            const returnedUser = new UserRegisterRequest();
            returnedUser.email = user?.email || "";
            returnedUser.name = user?.first_name || "";
            returnedUser.surname = user?.last_name || "";
            returnedUser.mobileNumber = "";
            returnedUser.password = "";
            return returnedUser;
        } else {
            throw new NotFoundException();
        }
    }
}


 
