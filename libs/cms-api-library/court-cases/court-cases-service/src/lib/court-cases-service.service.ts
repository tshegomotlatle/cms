import { CurrentUserService } from '@cms-authetication-api';
import { CourtCaseRepository } from '@cms-court-cases-repository';
import { CourtCase, UserToken } from '@cms-models';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CourtCasesService {
    constructor(
        private courtCaseRepository: CourtCaseRepository,
        private currentUserService: CurrentUserService
    ) { }

    public async AddCase(newCourtCase: CourtCase, accessToken: string): Promise<boolean | BadRequestException> {

        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        if (await this.CaseExists(newCourtCase.caseNumber, user?.userId || ""))
            return new BadRequestException()

        newCourtCase.dateCreated = new Date();
        newCourtCase.userId = this.currentUserService.GetUserToken(accessToken)?.userId || "";

        const courtCase = await this.courtCaseRepository.AddCase(newCourtCase);
        if (courtCase) {
            return true;
        }
        else {
            return new BadRequestException();
        }
    }

    public async EditCase(newCourtCase: CourtCase, accessToken: string): Promise<boolean | BadRequestException> {
        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        newCourtCase.userId = user?.userId || "";
        const courtCase = await this.courtCaseRepository.EditCase(newCourtCase);
        if (courtCase) {
            return true;
        }
        else {
            return new BadRequestException();
        }
    }

    public async GetCaseById(id: string, accessToken: string): Promise<CourtCase | NotFoundException> {

        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        const courtcase = await this.courtCaseRepository.GetCaseById(id, user?.userId || "");

        if (courtcase) {
            return courtcase;
        }
        else {
            return new NotFoundException();
        }
    }

    public async GetAllCases(accessToken: string): Promise<CourtCase[] | NotFoundException> {
        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        const courtcases = await this.courtCaseRepository.GetAllCases(user?.userId || "");

        if (courtcases) {
            return courtcases;
        }
        else {
            return new NotFoundException();
        }
    }

    public async DeleteCase(caseNumber: string, accessToken: string): Promise<boolean | NotFoundException> {
        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        if (!await this.CaseExists(caseNumber, user?.userId || ""))
            return new NotFoundException()

        const courtcases = await this.courtCaseRepository.DeleteCase(caseNumber, user?.userId || "");

        return true
    }

    public async GetAllCaseNumbers(accessToken: string): Promise<{ caseNumbers: string[] } | NotFoundException> {

        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        const courtCases = await this.courtCaseRepository.GetAllCases(user?.userId || "");

        if (!courtCases)
            return new NotFoundException();

        const caseNumbers = courtCases.map((courtCase) => {
            return courtCase.caseNumber;
        })

        if (caseNumbers) {
            return { caseNumbers: caseNumbers };
        }
        else {
            return { caseNumbers: [] };
        }
    }

    public async GetByCaseNumber(caseNumber: string, accessToken: string): Promise<CourtCase | NotFoundException> {
        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        const courtcases = await this.courtCaseRepository.GetByCaseNumber(caseNumber, user?.userId || "");

        if (courtcases) {
            return courtcases;
        }
        else {
            return new NotFoundException();
        }
    }

    public async CaseExists(caseNumber: string, userId: string): Promise<boolean> {
        const courtCase = await this.courtCaseRepository.GetByCaseNumber(caseNumber, userId);

        return courtCase ? true : false
    }
}
