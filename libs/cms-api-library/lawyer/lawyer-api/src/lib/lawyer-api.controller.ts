import { Lawyer, IdRequest, EmailRequest, AddLawyerRequest, UpdateLawyerRequest } from '@cms-models';
import { LawyerService } from '@cms/lawyer-service';
import {  BadRequestException, Body, Controller, Delete, GatewayTimeoutException, Get, NotFoundException, Post, Put, Query} from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiFoundResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UUID } from 'crypto';
@ApiTags("lawyer")
@Controller('lawyer')
export class LawyerApiController {

    constructor(
        private LawyerService: LawyerService
    ) { }

    @Get()
    @ApiFoundResponse()
    @ApiNotFoundResponse()
    @ApiQuery({ name: 'id', type: String })
    async GetLawyerById(@Query() query: IdRequest) {
        try {
            return this.LawyerService.GetLawyerById(query.id);
        }
        catch (error) {
            return new NotFoundException(error);
        }
    }

    @Get('email')
    @ApiFoundResponse()
    @ApiNotFoundResponse()
    @ApiQuery({ name: 'email', type: String })
    async GetLawyerByEmail(@Query() query: EmailRequest) {
        try {
            return this.LawyerService.GetLawyerByEmail(query.email);
        }
        catch (error) {
            return new NotFoundException(error);
        }
    }

    @Get('all')
    @ApiFoundResponse()
    @ApiNotFoundResponse()
    async GetAllLawyers() {

        try {
            return this.LawyerService.GetAllLawyers();
        }
        catch (error) {
            return new NotFoundException(error);
        }
    }

    @Post()
    @ApiCreatedResponse()
    @ApiBadRequestResponse()
    async AddLawyer(@Body() body: AddLawyerRequest) {
        try {
            return this.LawyerService.AddLawyer(body);
        }
        catch (error) {
            return new BadRequestException(error);
        }
    }

    @Put()
    @ApiOkResponse()
    @ApiBadRequestResponse()
    async UpdateLawyer(@Body() body: UpdateLawyerRequest) {
        try {
            return this.LawyerService.UpdateLawyer(body);
        }
        catch (error) {
            return new NotFoundException(error);
        }
    }

    @Delete()
    @ApiOkResponse()
    @ApiNotFoundResponse()
    async DeleteLawyer(@Body() body: IdRequest) {
        try {
            return this.LawyerService.DeleteLawyer(body.id);
        }
        catch (error) {
            return new NotFoundException(error);
        }
    }
}
