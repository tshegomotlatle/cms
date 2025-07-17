import { CommonFunctionsService } from '@cms-common-functions';
import { AddLawyerRequest, Lawyer, UpdateLawyerRequest, UserToken } from '@cms-models';
import { LawyerRepository } from '@cms/lawyer-repository';
import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class LawyerService {

    constructor(
        private lawyerRepository: LawyerRepository,
        private currentUserService: CommonFunctionsService
    ) {

    }

    public async GetLawyerById(id: string, accessToken: string): Promise<Lawyer | BadRequestException> {

        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        const lawyer = await this.lawyerRepository.GetLawyerById(id, user?.userId || "");

        if (!lawyer) {
            return new BadRequestException();
        }

        return lawyer
    }

    public async GetLawyerByEmail(email: string, accessToken: string): Promise<Lawyer | BadRequestException> {

        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        const lawyer = await this.lawyerRepository.GetLawyerByEmail(email, user?.userId || "");

        if (!lawyer) {
            return new BadRequestException();
        }

        return lawyer
    }

    public async GetAllLawyers(): Promise<Lawyer[] | BadRequestException> {
        const lawyer = await this.lawyerRepository.GetAllLawyers();

        if (!lawyer) {
            return new BadRequestException();
        }

        return lawyer
    }

    public async AddLawyer(newLawyer: AddLawyerRequest, accessToken: string): Promise<boolean | BadRequestException> {

        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        if (await this.CheckIfExistsEmail(newLawyer.email, user?.userId || ""))
            return new ConflictException();

        const lawyer = await this.lawyerRepository.AddLawyer(newLawyer);

        if (!lawyer) {
            return new BadRequestException();
        }

        return true;
    }

    public async UpdateLawyer(UpdateLawyer: UpdateLawyerRequest, accessToken: string): Promise<boolean | BadRequestException> {

        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        if (!await this.CheckIfExists(UpdateLawyer.id, user?.userId || ""))
            return new BadRequestException();

        const lawyer = await this.lawyerRepository.UpdateLawyer(UpdateLawyer, user?.userId || "");

        if (lawyer)
            return true;
        else
            return new BadRequestException();
    }

    public async DeleteLawyer(id: string, accessToken: string): Promise<boolean | BadRequestException> {

        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        if (!await this.CheckIfExists(id, user?.userId || ""))
            return new BadRequestException();

        await this.lawyerRepository.DeleteLawyer(id, "");

        return true;
    }

    public async CheckIfExists(id: string, userId: string): Promise<boolean> {
        const lawyer = await this.lawyerRepository.GetLawyerById(id, userId);

        return lawyer ? true : false
    }

    public async CheckIfExistsEmail(email: string, userId: string): Promise<boolean> {
        const lawyer = await this.lawyerRepository.GetLawyerByEmail(email, userId);

        return lawyer ? true : false
    }
}
