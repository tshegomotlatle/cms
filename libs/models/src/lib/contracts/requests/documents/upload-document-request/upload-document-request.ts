import { ApiProperty } from "@nestjs/swagger";

export class UploadDocumentRequest {
    @ApiProperty()
    path!: string;

    @ApiProperty()
    fileName!: string;

    @ApiProperty()
    caseId!: string;  

    @ApiProperty()
    dateCreated!: Date;
}
