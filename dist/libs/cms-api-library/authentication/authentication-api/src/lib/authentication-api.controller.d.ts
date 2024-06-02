import { AuthenticationService } from '@cms-authentication-service';
import { UpdatePasswordRequest, User, UserEditRequest, UserEmailRequest, UserLoginRequest, UserRegisterRequest } from '@cms-models';
export declare class AuthenticationApiController {
    private authenticationService;
    constructor(authenticationService: AuthenticationService);
    login(user: UserLoginRequest): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    register(user: UserRegisterRequest): Promise<User>;
    checkEmail(body: UserEmailRequest): Promise<boolean>;
    getUser(body: UserEmailRequest): Promise<User | null>;
    editUser(user: UserEditRequest): Promise<boolean>;
    updatePassword(body: UpdatePasswordRequest): Promise<boolean>;
    refreshToken(body: {
        email: string;
        refreshToken: string;
    }): Promise<{
        accessToken: string;
    }>;
}
