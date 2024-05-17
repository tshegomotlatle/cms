import { CourtCaseRepository } from '@cms-court-cases-repository';
import { CourtCase } from '@cms-models';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CourtCasesService {
    constructor(private courtCaseRepository: CourtCaseRepository,
        private jwtService : JwtService
    ) { }

    public async AddCase(courtCase: CourtCase): Promise<CourtCase | null> {
        courtCase.dateCreated = new Date();
        if (courtCase) {
            return this.courtCaseRepository.AddCase(courtCase);
        }
        else {
            return null;
        }

    }

    public async EditCase(courtCase: CourtCase): Promise<CourtCase | null> {
        if (courtCase) {
            return this.courtCaseRepository.EditCase(courtCase);
        }
        else {
            return null;
        }
    }

    public async GetCaseById(id: string, userId: string): Promise<CourtCase | null> {

        return this.courtCaseRepository.GetCaseById(id, userId);

    }

    public async GetAllCases(accessToken: string): Promise<CourtCase[]> {
        if (accessToken === "")
            return []

        const user: { userId: string, email: string } = this.jwtService.decode(accessToken);

        if (!user)
            return []

        return this.courtCaseRepository.GetAllCases(user.userId);
    }

    public async DeleteCase(caseNumber: string, userId: string): Promise<CourtCase> {
        return this.courtCaseRepository.DeleteCase(caseNumber, userId);
    }

    public async GetAllCaseNumbers(userId: string): Promise<{ caseNumbers: string[] }>
    {
        const courtCases = await this.courtCaseRepository.GetAllCases(userId);

        const caseNumbers = courtCases.map((courtCase) => {
            return courtCase.caseNumber;
        })

        if (caseNumbers)
        {
            return {caseNumbers : caseNumbers};
        }
        else
        {
            return {caseNumbers: []};
        }
    }

    public async GetAllCasesByCaseNumber(caseNumber: string, accessToken: string) : Promise<CourtCase| null>
    {
        if (accessToken === "" || caseNumber === "")
            return null

        const user: { userId: string, email: string } = this.jwtService.decode(accessToken);

        if (!user)
            return null

        return this.courtCaseRepository.GetAllCasesByCaseNumber(caseNumber, user.userId);
    }
}
