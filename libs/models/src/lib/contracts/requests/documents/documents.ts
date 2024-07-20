import { ApiProperty } from "@nestjs/swagger";

export class Documents {
    @ApiProperty()
    id?: string;

    @ApiProperty()
    fileName!:string;

    @ApiProperty()
    path!: string;

    @ApiProperty()
    caseId!: string;

    @ApiProperty()
    dateCreated!: Date;
}
