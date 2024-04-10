import { User } from '@cms-models';
import { Injectable, Logger } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import {AutheticationRepostiory} from "@cms-authentication-repository";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
    constructor(
        private authenticationRepository: AutheticationRepostiory,
        private jwtService: JwtService) { }

    async RegisterUser(user: User): Promise<User> {
        return await this.authenticationRepository.RegisterUser(user);
    }

    async UserLogin(email: string, password: string): Promise<{ access_token: string }> {

        let user = await this.authenticationRepository.GetUser(email);
        Logger.log(user);
        if (user) {
            var passwordHash = await bcrypt.hash(password, user?.password);
            if (passwordHash == user?.password) {
                const payload = { sub: user.id, username: user.email };
                return {
                    access_token: await this.jwtService.signAsync(payload),
                };
            }
        }

        return {
            access_token: ""
        };
    }

    async CheckEmailExists(email: string): Promise<boolean> {

        let user = await this.authenticationRepository.GetUser(email);

        if (user) {
            return true;
        }
        else {
            return false;
        }
    }

    async EditUser(user: User): Promise<boolean> {

        let result = await this.authenticationRepository.EditUser(user);

        if (result) {
            return true;
        }
        else {
            return false;
        }
    }

    async UpdatePassword(password: string, userId: string): Promise<boolean> {

        let result = await this.authenticationRepository.UpdatePassword(password, userId)

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
}
