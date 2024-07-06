import { Lawyer, AddLawyerRequest, UpdateLawyerRequest } from '@cms-models';
import { LawyerRepository } from '@cms/lawyer-repository';
import { BadRequestException, ConflictException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { UUID } from 'crypto';

@Injectable()
export class LawyerService {

    constructor(
        private lawyerRepository: LawyerRepository
    ) {

    }

    public async GetLawyerById(id: string): Promise<Lawyer | HttpException> {
        const lawyer = await this.lawyerRepository.GetLawyerById(id);

        if (!lawyer) {
            return new NotFoundException();
        }

        return lawyer
    }

    public async GetLawyerByEmail(email: string): Promise<Lawyer | HttpException> {

        const lawyer = await this.lawyerRepository.GetLawyerByEmail(email);

        if (!lawyer) {
            return new NotFoundException();
        }

        return lawyer
    }

    public async GetAllLawyers(): Promise<Lawyer[] | HttpException> {
        const lawyer = await this.lawyerRepository.GetAllLawyers();

        if (!lawyer) {
            return new NotFoundException();
        }

        return lawyer
    }

    public async AddLawyer(newLawyer: AddLawyerRequest): Promise<Boolean | HttpException> {
        if (await this.CheckIfExistsEmail(newLawyer.email))
            return new ConflictException();

        const lawyer = await this.lawyerRepository.AddLawyer(newLawyer);

        if (!lawyer) {
            return new BadRequestException();
        }

        return true;
    }

    public async UpdateLawyer(UpdateLawyer: UpdateLawyerRequest): Promise<Boolean | HttpException> {
        if (!await this.CheckIfExists(UpdateLawyer.id))
            return new NotFoundException();

        const lawyer = await this.lawyerRepository.UpdateLawyer(UpdateLawyer);

        return true;
    }

    public async DeleteLawyer(id: string): Promise<Boolean | HttpException> {

        if (!await this.CheckIfExists(id))
            return new NotFoundException();

        await this.lawyerRepository.DeleteLawyer(id);

        return true;
    }

    public async CheckIfExists(id : string): Promise<Boolean> {
        const lawyer = await this.lawyerRepository.GetLawyerById(id);

        return lawyer ? true : false
    }

    public async CheckIfExistsEmail(email : string): Promise<Boolean> {
        const lawyer = await this.lawyerRepository.GetLawyerByEmail(email);

        return lawyer ? true : false
    }
}
