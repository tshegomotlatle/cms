import { ApiProperty } from "@nestjs/swagger";

export class Documents {
    @ApiProperty()
    id?: string;

    @ApiProperty()
    fileName!:string;

    @ApiProperty()
    path!: string;

    @ApiProperty()
    caseNumber!: string;

    @ApiProperty()
    dateCreated!: Date;
}
