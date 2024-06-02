import { CourtCase } from '@cms-models';
import { CourtCasesService } from '@cms-court-cases-service';
export declare class CourtCasesApiController {
    private _courtCaseService;
    constructor(_courtCaseService: CourtCasesService);
    add(courtCase: CourtCase): Promise<CourtCase | null>;
    delete(body: {
        caseNumber: string;
        userId: string;
    }): Promise<CourtCase | null>;
    getAllCases(body: {
        accessToken: string;
    }): Promise<CourtCase[]>;
    edit(courtCase: CourtCase): Promise<CourtCase | null>;
    getCaseById(body: {
        id: string;
        userId: string;
    }): Promise<CourtCase | null>;
    getAllCaseNumbers(body: {
        userId: string;
    }): Promise<{
        caseNumbers: string[];
    }>;
    getCaseByCaseNumber(body: {
        caseNumber: string;
        accessToken: string;
    }): Promise<CourtCase | null>;
}
