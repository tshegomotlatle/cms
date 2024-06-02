import { User, UserEditRequest, UserRegisterRequest } from '@cms-models';
import { AutheticationRepostiory } from "@cms-authentication-repository";
import { JwtService } from '@nestjs/jwt';
export declare class AuthenticationService {
    private authenticationRepository;
    private jwtService;
    constructor(authenticationRepository: AutheticationRepostiory, jwtService: JwtService);
    RegisterUser(user: UserRegisterRequest): Promise<User>;
    UserLogin(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    CheckEmailExists(email: string): Promise<boolean>;
    EditUser(user: UserEditRequest): Promise<boolean>;
    UpdatePassword(password: string, userId: string): Promise<boolean>;
    GetUser(email: string): Promise<User | null>;
    RefreshToken(email: string, refreshToken: string): Promise<{
        accessToken: string;
    }>;
}
