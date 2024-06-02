import { CourtCaseRepository } from '@cms-court-cases-repository';
import { CourtCase } from '@cms-models';
import { JwtService } from '@nestjs/jwt';
export declare class CourtCasesService {
    private courtCaseRepository;
    private jwtService;
    constructor(courtCaseRepository: CourtCaseRepository, jwtService: JwtService);
    AddCase(courtCase: CourtCase): Promise<CourtCase | null>;
    EditCase(courtCase: CourtCase): Promise<CourtCase | null>;
    GetCaseById(id: string, userId: string): Promise<CourtCase | null>;
    GetAllCases(accessToken: string): Promise<CourtCase[]>;
    DeleteCase(caseNumber: string, userId: string): Promise<CourtCase>;
    GetAllCaseNumbers(userId: string): Promise<{
        caseNumbers: string[];
    }>;
    GetAllCasesByCaseNumber(caseNumber: string, accessToken: string): Promise<CourtCase | null>;
}
