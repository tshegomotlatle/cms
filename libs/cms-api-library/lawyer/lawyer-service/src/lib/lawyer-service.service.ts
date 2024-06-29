import { Lawyer } from '@cms-models';
import { LawyerRepository } from '@cms/lawyer-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LawyerService {

    constructor(
        private lawyerRepository: LawyerRepository
    ) {

    }

    public async GetLawyerById(id: string): Promise<Lawyer | null> {
        if (id === "" || id === undefined || id === null) 
            return null

        return this.lawyerRepository.GetLawyerById(id);
    }

    public async GetLawyerByEmail(email: string): Promise<Lawyer | null> {
        if (email === "" || email === undefined || email === null) 
            return null

        return this.lawyerRepository.GetLawyerByEmail(email);
    }

    public async GetAllLawyers(): Promise<Lawyer[]> {
        return this.lawyerRepository.GetAllLawyers();
    }

    public async AddLawyer(lawyer: Lawyer): Promise<Lawyer | null> {
        if (!this.ValidateLawyer(lawyer))
            return null;
        return this.lawyerRepository.AddLawyer(lawyer);
    }

    public async UpdateLawyer(lawyer: Lawyer): Promise<Lawyer | null> {
        if (!this.ValidateLawyer(lawyer))
            return null;
        return this.lawyerRepository.UpdateLawyer(lawyer);
    }

    public async DeleteLawyer(id: string): Promise<Lawyer | null> {
        if (id === "" || id === undefined || id === null) 
            return null
        return this.lawyerRepository.DeleteLawyer(id);
    }

    private ValidateLawyer(lawyer: Lawyer): boolean {
        if (lawyer.email === "" || lawyer.email === undefined || lawyer.email === null) 
            return false
        if (lawyer.name === "" || lawyer.name === undefined || lawyer.name === null) 
            return false
        if (lawyer.surname === "" || lawyer.surname === undefined || lawyer.surname === null) 
            return false
        if (lawyer.mobileNumber === "" || lawyer.mobileNumber === undefined || lawyer.mobileNumber === null) 
            return false
        return true
    }
}
