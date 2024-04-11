import { AuthenticationService } from '@cms-authentication-service';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from '@cms-models';
import { AuthenticationGuard } from './Guard/authentication.guard';

@Controller('authentication')
export class AuthenticationApiController {

    constructor(private authenticationService: AuthenticationService) { }

    @Post('login')
    async login(@Body() user: User): Promise<{ access_token: string }> {
        return await this.authenticationService.UserLogin(user.email, user.password);
    }

    @Post('register')
    async register(@Body() user: User): Promise<User> {
        return await this.authenticationService.RegisterUser(user)
    }

    @Post('checkEmail')
    async checkEmail(@Body() body: { email: string }): Promise<boolean> {
        return await this.authenticationService.CheckEmailExists(body.email);
    }

    @UseGuards(AuthenticationGuard)
    @Post('getUser')
    async getUser(@Body() body: { email: string }): Promise<User | null> {
        return await this.authenticationService.GetUser(body.email);
    }

    @Post('editUser')
    async editUser(@Body() user: User): Promise<boolean> {
        return await this.authenticationService.EditUser(user);
    }

    @Post('updatePassword')
    async updatePassword(@Body() body: { password: string, userId: string }): Promise<boolean> {
        return await this.authenticationService.UpdatePassword(body.password, body.userId);
    }
}
