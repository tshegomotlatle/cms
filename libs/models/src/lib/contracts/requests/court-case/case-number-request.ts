import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsNotEmpty } from "class-validator";

export class CaseNumberRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsAlphanumeric()
     caseNumber!: string 
}