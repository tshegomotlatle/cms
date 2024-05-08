import { AuthenticationService } from '@cms-authentication-service';
import { Body, Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { UpdatePasswordRequest, User, UserEditRequest, UserEmailRequest, UserLoginRequest, UserRegisterRequest } from '@cms-models';
import { AuthenticationGuard } from './Guard/authentication.guard';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { RefreshTokenGuard } from './Guard/refresh-token.guard';

@ApiTags("authentication")
@Controller('authentication')
export class AuthenticationApiController {

    constructor(private authenticationService: AuthenticationService) { }

    @Post('login')
    @ApiBody({ type: UserLoginRequest })
    async login(@Body() user: UserLoginRequest): Promise<{ accessToken: string, refreshToken: string }> {
        return await this.authenticationService.UserLogin(user.email, user.password);
    }

    @Post('register')
    async register(@Body() user: UserRegisterRequest): Promise<User> {
        return await this.authenticationService.RegisterUser(user)
    }

    @Post('checkEmail')
    async checkEmail(@Body() body: UserEmailRequest): Promise<boolean> {
        return await this.authenticationService.CheckEmailExists(body.email);
    }

    @UseGuards(AuthenticationGuard)
    @Post('getUser')
    async getUser(@Body() body: UserEmailRequest): Promise<User | null> {
        return await this.authenticationService.GetUser(body.email);
    }

    @Post('editUser')
    async editUser(@Body() user: UserEditRequest): Promise<boolean> {
        return await this.authenticationService.EditUser(user);
    }

    @Post('updatePassword')
    async updatePassword(@Body() body: UpdatePasswordRequest): Promise<boolean> {
        return await this.authenticationService.UpdatePassword(body.password, body.userId);
    }

    @UseGuards(RefreshTokenGuard)
    @Post('refreshToken')
    async refreshToken(@Body() body: { email: string, refreshToken: string }): Promise<{ accessToken: string }> {
        return await this.authenticationService.RefreshToken(body.email, body.refreshToken);
    }
}
