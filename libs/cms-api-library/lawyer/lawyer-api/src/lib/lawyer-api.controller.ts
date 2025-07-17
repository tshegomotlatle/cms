import { AddLawyerRequest, EmailRequest, IdRequest, Lawyer, UpdateLawyerRequest } from '@cms-models';
import { LawyerService } from '@cms/lawyer-service';
import { BadRequestException, Body, Controller, Delete, Get, Headers, NotFoundException, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiFoundResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'nest-keycloak-connect';

@ApiTags("lawyer")
@Controller('lawyer')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class LawyerApiController {

    constructor(
        private lawyerService: LawyerService
    ) { }

    @Get(':id')
    @ApiFoundResponse({ type: Lawyer })
    @ApiNotFoundResponse({ description: "Lawyer not found" })
    @ApiParam({ name: 'id', type: String, required: true, description: "Lawyer id" })
    GetLawyerById(@Param() param: IdRequest, @Headers() headers: { authorization: string }): Promise<Lawyer | NotFoundException> {
        return this.lawyerService.GetLawyerById(param.id, headers.authorization);
    }

    @Get('email/:email')
    @ApiFoundResponse({ type: Lawyer })
    @ApiNotFoundResponse({ description: "Lawyer not found" })
    @ApiParam({ name: 'email', type: String, required: true, description: "Lawyer email" })
    GetLawyerByEmail(@Param() param: EmailRequest, @Headers() headers: { authorization: string }): Promise<Lawyer | NotFoundException> {
        return this.lawyerService.GetLawyerByEmail(param.email, headers.authorization);
    }

    @Get('lawyers/all')
    @ApiFoundResponse({ type: Lawyer, isArray: true })
    @ApiNotFoundResponse({ description: "Lawyers not found" })
    GetAllLawyers(): Promise<Lawyer[] | NotFoundException> {
        return this.lawyerService.GetAllLawyers();
    }

    @Post()
    @ApiCreatedResponse({ type: Boolean })
    @ApiBadRequestResponse({ description: "Lawyer already exists" })
    AddLawyer(@Body() body: AddLawyerRequest, @Headers() headers: { authorization: string }): Promise<boolean | BadRequestException> {
        return this.lawyerService.AddLawyer(body, headers.authorization);
    }

    @Put()
    @ApiOkResponse({ type: Boolean })
    @ApiBadRequestResponse({ description: "Lawyer not found" })
    UpdateLawyer(@Body() body: UpdateLawyerRequest, @Headers() headers: { authorization: string }): Promise<boolean | BadRequestException> {
        return this.lawyerService.UpdateLawyer(body, headers.authorization);
    }

    @Delete(':id')
    @ApiOkResponse({ type: Boolean })
    @ApiBadRequestResponse({ description: "Lawyer not found" })
    @ApiParam({ name: 'id', type: String, required: true, description: "Lawyer id" })
    DeleteLawyer(@Param() param: IdRequest, @Headers() headers: { authorization: string }): Promise<boolean | BadRequestException> {
        return this.lawyerService.DeleteLawyer(param.id, headers.authorization);
    }
}
