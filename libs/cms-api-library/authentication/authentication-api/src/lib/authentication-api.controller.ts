import { AuthenticationService } from '@cms-authentication-service';
import { EmailRequest, KeycloakRegisterRequest, User, UserEditRequest, UserMobileEditRequest, UserResponse } from '@cms-models';
import { BadRequestException, Body, Controller, Get, Logger, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

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
    
    @Post('post-register')
    @ApiOkResponse({ type: Boolean, description: 'Returns true if email exists' })
    async postRegister(@Body() body: KeycloakRegisterRequest): Promise<boolean | BadRequestException> {
        Logger.log("Post Register called with body: " + JSON.stringify(body));
        return await this.authenticationService.RegisterUser(body);
    }
    
    @Put('user')
    @ApiOkResponse({ type: Boolean, description: 'Returns true if user is edited' })
    async editUser(@Body() user: UserEditRequest): Promise<boolean> {
        return await this.authenticationService.EditUser(user);
    }
    @Put('user/mobile')
    @ApiOkResponse({ type: Boolean, description: 'Returns true if user mobile number is edited' })
    async editMobileNumber(@Body() user: UserMobileEditRequest): Promise<boolean | NotFoundException> {
        return await this.authenticationService.EditMobileNumber(user);
    }
}
