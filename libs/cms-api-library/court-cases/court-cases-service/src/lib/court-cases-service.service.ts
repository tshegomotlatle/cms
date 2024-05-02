import { CourtCaseRepository } from '@cms-court-cases-repository';
import { CourtCase } from '@cms-models';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourtCasesService {
    constructor(private courtCaseRepository: CourtCaseRepository) { }

    public async AddCase(courtCase: CourtCase): Promise<CourtCase | null> {
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

        return await this.courtCaseRepository.GetCaseById(id, userId);

    }

    public async GetAllCases(userId: string): Promise<CourtCase[]> {
        return this.courtCaseRepository.GetAllCases(userId);
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
}
