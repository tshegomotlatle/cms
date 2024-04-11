import { ApiProperty } from "@nestjs/swagger";

export class UploadDocumentRequest {
    @ApiProperty()
    id!: String;

    @ApiProperty()
    path!: String;

    @ApiProperty()
    caseId!: String;  

    @ApiProperty()
    dateCreated!: String;
}
