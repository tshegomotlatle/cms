import { CourtCase } from '@cms-models';
import { Body, Controller, Logger, Post, UseGuards, Headers } from '@nestjs/common';
import { CourtCasesService } from '@cms-court-cases-service'
import { ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from '@cms-authetication-api' 
@ApiTags("court-cases")
@Controller('court-cases')
export class CourtCasesApiController {
    constructor(private _courtCaseService: CourtCasesService) { }

    
    @Post('add')
    add(@Body() courtCase: CourtCase, @Headers() headers: any): Promise<CourtCase | null> {
        return this._courtCaseService.AddCase(courtCase, headers.authorization);
    }

    @Post('delete')
    delete(@Body() body: { caseNumber: string, userId: string }): Promise<CourtCase | null> {
        return this._courtCaseService.DeleteCase(body.caseNumber, body.userId);
    }

    @UseGuards(AccessTokenGuard)
    @Post('getAllCases')
    getAllCases(@Body() body: { accessToken: string }): Promise<CourtCase[]> {
        return this._courtCaseService.GetAllCases(body.accessToken);
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

    @Post('getCaseByCaseNumber')
    getCaseByCaseNumber(@Body() body: { caseNumber: string, accessToken: string }) : Promise<CourtCase | null>
    {
        Logger.log(body)
        return this._courtCaseService.GetAllCasesByCaseNumber(body.caseNumber, body.accessToken);
    }
}
