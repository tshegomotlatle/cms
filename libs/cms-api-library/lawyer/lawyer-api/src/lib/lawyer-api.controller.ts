import { Lawyer } from '@cms-models';
import { LawyerService } from '@cms/lawyer-service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('lawyer-api')
export class LawyerApiController {

    constructor(
        private LawyerService: LawyerService
    ) {}

    @Post('add')
    async AddLawyer(@Body() body: Lawyer) {
        return this.LawyerService.AddLawyer(body);
    }

    @Post('update')
    async UpdateLawyer(@Body() body: Lawyer) {
        return this.LawyerService.UpdateLawyer(body);
    }

    @Post('delete')
    async DeleteLawyer(@Body() body: {id : string}) {
        return this.LawyerService.DeleteLawyer(body.id);
    }

    @Post('get')
    async GetLawyerById(@Body() body: {id : string}) {
        return this.LawyerService.GetLawyerById(body.id);
    }

    @Post('getByEmail')
    async GetLawyerByEmail(@Body() body: {email : string}) {
        return this.LawyerService.GetLawyerByEmail(body.email);
    }

    @Post('getAll')
    async GetAllLawyers() {
        return this.LawyerService.GetAllLawyers();
    }
}
