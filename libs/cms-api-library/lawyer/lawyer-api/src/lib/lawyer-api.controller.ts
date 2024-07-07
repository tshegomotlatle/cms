import { Lawyer, IdRequest, EmailRequest, AddLawyerRequest, UpdateLawyerRequest } from '@cms-models';
import { LawyerService } from '@cms/lawyer-service';
import {  BadRequestException, Body, Controller, Delete, Get, NotFoundException, Post, Put, Query} from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiFoundResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("lawyer")
@Controller('lawyer')
@ApiBearerAuth()
export class LawyerApiController {

    constructor(
        private lawService: LawyerService
    ) { }

    @Get()
    @ApiFoundResponse({ type: Lawyer })
    @ApiNotFoundResponse()
    @ApiQuery({ name: 'id', type: String })
    GetLawyerById(@Query() query: IdRequest): Promise<Lawyer | NotFoundException> {
        return this.lawService.GetLawyerById(query.id);
    }

    @Get('email')
    @ApiFoundResponse({ type: Lawyer })
    @ApiNotFoundResponse()
    @ApiQuery({ name: 'email', type: String })
    GetLawyerByEmail(@Query() query: { email: string }): Promise<Lawyer | NotFoundException> {
        return this.lawService.GetLawyerByEmail(query.email);
    }

    @Get('all')
    @ApiFoundResponse({ type: [Lawyer] })
    @ApiNotFoundResponse()
    GetAllLawyers(): Promise<Lawyer[] | NotFoundException> {
        return this.lawService.GetAllLawyers();
    }

    @Post()
    @ApiCreatedResponse()
    @ApiBadRequestResponse()
    AddLawyer(@Body() body: AddLawyerRequest): Promise<boolean | BadRequestException> {
        return this.lawService.AddLawyer(body);
    }

    @Put()
    @ApiOkResponse()
    @ApiBadRequestResponse()
    UpdateLawyer(@Body() body: UpdateLawyerRequest): Promise<boolean | BadRequestException> {
        return this.lawService.UpdateLawyer(body);
    }

    @Delete()
    @ApiOkResponse()
    @ApiNotFoundResponse()
    DeleteLawyer(@Body() body: IdRequest): Promise<boolean | NotFoundException> {
        return this.lawService.DeleteLawyer(body.id);
    }
}
