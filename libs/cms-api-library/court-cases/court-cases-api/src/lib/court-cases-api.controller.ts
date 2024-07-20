import { AccessTokenGuard } from '@cms-authetication-api';
import { CourtCasesService } from '@cms-court-cases-service';
import { CaseNumberRequest, CourtCase, GetAllCaseNumbersRespone, IdRequest } from '@cms-models';
import { BadRequestException, Body, Controller, Delete, Get, Headers, NotFoundException, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiFoundResponse, ApiNotFoundResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags("court-cases")
@Controller('court-cases')
@ApiBearerAuth()
export class CourtCasesApiController {
    constructor(private _courtCaseService: CourtCasesService) { }

    @UseGuards(AccessTokenGuard)
    @Get(':id')
    @ApiFoundResponse({ type: CourtCase, description: 'The court case with the specified ID.' })
    @ApiNotFoundResponse({ description: 'The court case with the specified ID was not found.' })
    @ApiParam({ name: 'id', type: String })
    GetCaseById(@Param() param: IdRequest, @Headers() headers: { authorization: string }): Promise<CourtCase | NotFoundException> {
        // Call the court cases service to get the court case by ID.
        return this._courtCaseService.GetCaseById(param.id, headers.authorization);
    }

    @UseGuards(AccessTokenGuard)
    @Get('all/caseNumbers')
    @ApiFoundResponse({ type: GetAllCaseNumbersRespone, description: 'The list of case numbers.' })
    @ApiNotFoundResponse({ description: 'The list of case numbers is empty.' })
    GetAllCaseNumbers(@Headers() headers: { authorization: string }): Promise<GetAllCaseNumbersRespone | NotFoundException> {
        return this._courtCaseService.GetAllCaseNumbers(headers.authorization);
    }

    @UseGuards(AccessTokenGuard)
    @Get('case-number/:caseNumber')
    @ApiFoundResponse({ type: GetAllCaseNumbersRespone, description: 'The court case with the specified case number.' })
    @ApiNotFoundResponse({ description: 'The case with the case number was not found' })
    @ApiParam({ name: 'caseNumber', type: String, required: true, description: 'The case number of the court case.' })
    GetCaseByCaseNumber(@Param() param: CaseNumberRequest, @Headers() headers: { authorization: string }): Promise<CourtCase | NotFoundException> {
        return this._courtCaseService.GetByCaseNumber(param.caseNumber, headers.authorization);
    }

    @UseGuards(AccessTokenGuard)
    @Get('all')
    @ApiFoundResponse({ type: [CourtCase], description: 'The list of court cases.' })
    @ApiNotFoundResponse({ description: 'The list of court cases is empty.' })
    GetAllCases(@Headers() headers: { authorization: string }): Promise<CourtCase[] | NotFoundException> {
        return this._courtCaseService.GetAllCases(headers.authorization);
    }

    @UseGuards(AccessTokenGuard)
    @Post()
    @ApiFoundResponse({ type: Boolean, description: 'True if the court case was added successfully.' })
    @ApiBadRequestResponse({ description: 'The specified case number already exists.' })
    Add(@Body() courtCase: CourtCase, @Headers() headers: { authorization: string }): Promise<boolean | BadRequestException> {
        return this._courtCaseService.AddCase(courtCase, headers.authorization);
    }

    @UseGuards(AccessTokenGuard)
    @Put()
    @ApiFoundResponse({ type: Boolean, description: 'True if the court case was edited successfully.' })
    @ApiBadRequestResponse({ description: 'The specified case number does not exist.' })
    Edit(@Body() courtCase: CourtCase, @Headers() headers: { authorization: string }): Promise<boolean | BadRequestException> {
        return this._courtCaseService.EditCase(courtCase, headers.authorization);
    }

    @UseGuards(AccessTokenGuard)
    @Delete(':caseNumber')
    @ApiFoundResponse({ type: Boolean, description: 'True if the court case was deleted successfully.' })
    @ApiBadRequestResponse({ description: 'The specified case number does not exist.' })
    @ApiParam({ name: 'caseNumber', type: String, required: true, description: 'The case number of the court case.' })
    Delete(@Param() param: CaseNumberRequest, @Headers() headers: { authorization: string }): Promise<boolean | BadRequestException> {
        return this._courtCaseService.DeleteCase(param.caseNumber, headers.authorization);
    }
}
