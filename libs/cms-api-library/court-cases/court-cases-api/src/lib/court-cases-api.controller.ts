import { CourtCase } from '@cms-models';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CourtCasesService } from '@cms-court-cases-service'
import { ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from '@cms-authetication-api' 
@ApiTags("court-cases")
@Controller('court-cases')
export class CourtCasesApiController {
    constructor(private _courtCaseService: CourtCasesService) { }

    @Post('add')
    add(@Body() courtCase: CourtCase): Promise<CourtCase | null> {
        return this._courtCaseService.AddCase(courtCase);
    }

    @Post('delete')
    delete(@Body() body: { caseNumber: string, userId: string }): Promise<CourtCase | null> {
        return this._courtCaseService.DeleteCase(body.caseNumber, body.userId);
    }

    @UseGuards(AccessTokenGuard)
    @Post('getAllCases')
    getAllCases(@Body() body: { userId: string }): Promise<CourtCase[]> {
        return this._courtCaseService.GetAllCases(body.userId);
    }

    @Post('edit')
    edit(@Body() courtCase: CourtCase): Promise<CourtCase | null> {
        return this._courtCaseService.EditCase(courtCase);
    }

    //@UseGuards(AuthenticationGuard)
    @Post('getCaseById')
    getCaseById(@Body() body: { id: string, userId: string }): Promise<CourtCase | null> {
        return this._courtCaseService.GetCaseById(body.id, body.userId);
    }

    @Post('getAllCaseNumbers')
    getAllCaseNumbers(@Body() body: { userId: string }) : Promise<{ caseNumbers : string []}>
    {
        return this._courtCaseService.GetAllCaseNumbers(body.userId);
    }
}
