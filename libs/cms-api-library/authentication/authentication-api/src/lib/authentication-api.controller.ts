import { AuthenticationService } from '@cms-authentication-service';
import { Body, Controller, Get, Logger, Post, Put, UseGuards, Headers, NotFoundException, BadRequestException, Param } from '@nestjs/common';
import { AccessTokenResponse, EmailRequest, KeycloakRegisterRequest, RefreshTokenRequest, UpdatePasswordRequest, User, UserEditRequest, UserLoginRequest, UserRegisterRequest, UserResponse } from '@cms-models';
import { ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags("authentication")
@Controller('authentication')
@ApiBearerAuth()
export class AuthenticationApiController {

    constructor(private authenticationService: AuthenticationService) { }

    @Get('user/:email')
    @ApiOkResponse({ type: User, description: 'Returns user' })
    @ApiNotFoundResponse({ description: 'User not found' })
    @ApiParam({ name: 'email', type: String, description: 'User email', required: true })
    async getUser(@Param() body: EmailRequest): Promise<UserResponse | NotFoundException> {
        return await this.authenticationService.GetUser(body.email);
    }

    @Post('login')
    @ApiOkResponse({ type: AccessTokenResponse, description: 'Returns access token and refresh token' })
    @ApiBadRequestResponse({ description: 'Invalid credentials' })
    async login(@Body() user: UserLoginRequest): Promise<AccessTokenResponse | BadRequestException> {
        return await this.authenticationService.UserLogin(user.email, user.password);
    }


    @Post('refresh-token')
    @ApiOkResponse({ type: AccessTokenResponse, description: 'Returns access token and refresh token' })
    @ApiBadRequestResponse({ description: 'Invalid refresh token' })
    async refreshToken(@Body() body: RefreshTokenRequest): Promise<AccessTokenResponse | BadRequestException> {
        return await this.authenticationService.RefreshToken(body.refreshToken);
    }

    @Post('check-email')
    @ApiOkResponse({ type: Boolean, description: 'Returns true if email exists' })
    async checkEmail(@Body() body: EmailRequest): Promise<boolean> {
        return await this.authenticationService.CheckEmailExists(body.email);
    }
    
    @Post('post-register')
    @ApiOkResponse({ type: Boolean, description: 'Returns true if email exists' })
    async postRegister(@Body() body: KeycloakRegisterRequest): Promise<boolean | BadRequestException> {
        return await this.authenticationService.RegisterUser(body);
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
}
