import {ApiProperty} from '@nestjs/swagger'

export class GetInvoicesByCaseNumberRequest {
    @ApiProperty()
    caseNumber!: string;

    @ApiProperty()
    accessToken!:string;
}
