import { AutheticationRepostiory } from "@cms-authentication-repository";
import { KeycloakRegisterRequest, User, UserEditRequest, UserMobileEditRequest, UserRegisterRequest } from '@cms-models';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AuthenticationService {

    constructor(
        private authenticationRepository: AutheticationRepostiory) { }

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

    async GetUser(email: string): Promise<User | NotFoundException> {
        const user = await this.authenticationRepository.GetUser(email);

        if (user) {
            return user;
        }
        else {
            throw new NotFoundException();
        }
    }

    
    async EditMobileNumber(user: UserMobileEditRequest): Promise<boolean | NotFoundException> {
        const result = await this.authenticationRepository.EditMobileNumber(user);

        if (result) {
            return true;
        }
        else {
            return new NotFoundException();
        }
    }
}


 
