import { Lawyer, IdRequest, EmailRequest, AddLawyerRequest, UpdateLawyerRequest } from '@cms-models';
import { LawyerService } from '@cms/lawyer-service';
import {  BadRequestException, Body, Controller, Delete, Get, NotFoundException, Post, Put, Query} from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiFoundResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("lawyer")
@Controller('lawyer')
@ApiBearerAuth()
export class LawyerApiController {

    constructor(
        private lawyerService: LawyerService
    ) { }

    @Get()
    @ApiFoundResponse({ type: Lawyer })
    @ApiNotFoundResponse({description: "Lawyer not found"})
    @ApiQuery({ name: 'id', type: String })
    GetLawyerById(@Query() query: IdRequest): Promise<Lawyer | NotFoundException> {
        return this.lawyerService.GetLawyerById(query.id);
    }

    @Get('email')
    @ApiFoundResponse({ type: Lawyer })
    @ApiNotFoundResponse({description: "Lawyer not found"})
    @ApiQuery({ name: 'email', type: String })
    GetLawyerByEmail(@Query() query: { email: string }): Promise<Lawyer | NotFoundException> {
        return this.lawyerService.GetLawyerByEmail(query.email);
    }

    @Get('all')
    @ApiFoundResponse({ type: [Lawyer], isArray: true })
    @ApiNotFoundResponse({description: "Lawyers not found"})
    GetAllLawyers(): Promise<Lawyer[] | NotFoundException> {
        return this.lawyerService.GetAllLawyers();
    }

    @Post()
    @ApiCreatedResponse({ type: Boolean })
    @ApiBadRequestResponse({ description: "Lawyer already exists" })
    AddLawyer(@Body() body: AddLawyerRequest): Promise<boolean | BadRequestException> {
        return this.lawyerService.AddLawyer(body);
    }

    @Put()
    @ApiOkResponse({ type: Boolean })
    @ApiBadRequestResponse({ description: "Lawyer not found" })
    UpdateLawyer(@Body() body: UpdateLawyerRequest): Promise<boolean | BadRequestException> {
        return this.lawyerService.UpdateLawyer(body);
    }

    @Delete()
    @ApiOkResponse({ type: Boolean })
    @ApiNotFoundResponse({ description: "Lawyer not found" })
    DeleteLawyer(@Body() body: IdRequest): Promise<boolean | NotFoundException> {
        return this.lawyerService.DeleteLawyer(body.id);
    }
}
