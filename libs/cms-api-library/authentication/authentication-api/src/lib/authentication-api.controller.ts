import { AuthenticationService } from '@cms-authentication-service';
import { Body, Controller, Get, Logger, Post, Put, UseGuards, Headers, NotFoundException, BadRequestException } from '@nestjs/common';
import { AccessTokenResponse, EmailRequest, RefreshTokenRequest, UpdatePasswordRequest, User, UserEditRequest, UserLoginRequest, UserRegisterRequest } from '@cms-models';
import { AuthenticationGuard } from './Guard/authentication.guard';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RefreshTokenGuard } from './Guard/refresh-token.guard';

@ApiTags("authentication")
@Controller('authentication')
@ApiBearerAuth()
export class AuthenticationApiController {

    constructor(private authenticationService: AuthenticationService) { }

    @Post('login')
    @ApiOkResponse({ type: AccessTokenResponse, description: 'Returns access token and refresh token' })
    async login(@Body() user: UserLoginRequest): Promise<AccessTokenResponse> {
        return await this.authenticationService.UserLogin(user.email, user.password);
    }

    @Post('register')
    @ApiCreatedResponse({ type: AccessTokenResponse, description: 'Returns access token and refresh token' })
    async register(@Body() user: UserRegisterRequest): Promise<User | BadRequestException> {
        return await this.authenticationService.RegisterUser(user)
    }

    @Post('check-email')
    @ApiOkResponse({ type: Boolean, description: 'Returns true if email exists' })
    async checkEmail(@Body() body: EmailRequest): Promise<boolean> {
        return await this.authenticationService.CheckEmailExists(body.email);
    }

    @UseGuards(AuthenticationGuard)
    @Get('user')
    @ApiOkResponse({ type: User, description: 'Returns user' })
    @ApiNotFoundResponse({ description: 'User not found' })
    async getUser(@Body() body: EmailRequest): Promise<User | NotFoundException> {
        return await this.authenticationService.GetUser(body.email);
    }

    @Put('user')
    @ApiOkResponse({ type: Boolean, description: 'Returns true if user is edited' })
    async editUser(@Body() user: UserEditRequest): Promise<boolean> {
        return await this.authenticationService.EditUser(user);
    }

    @Put('update-password')
    @ApiOkResponse({ type: Boolean, description: 'Returns true if password is updated' })
    async updatePassword(@Body() body: UpdatePasswordRequest, @Headers() headers: { authorization: string }): Promise<boolean> {
        return await this.authenticationService.UpdatePassword(body.password, headers.authorization);
    }

    @UseGuards(RefreshTokenGuard)
    @Post('refresh-token')
    @ApiOkResponse({ type: AccessTokenResponse, description: 'Returns access token and refresh token' })
    async refreshToken(@Body() body: RefreshTokenRequest): Promise<AccessTokenResponse> {
        return await this.authenticationService.RefreshToken(body.email, body.refreshToken);
    }
}
