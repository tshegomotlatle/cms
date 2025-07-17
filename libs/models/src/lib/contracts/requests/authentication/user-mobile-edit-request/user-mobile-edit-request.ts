import { ApiProperty } from "@nestjs/swagger";
import { IsMobilePhone, IsNotEmpty, IsUUID } from "class-validator";

export class UserMobileEditRequest {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    id!: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsMobilePhone('en-ZA')
    mobileNumber!: string;
}
