import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, isAlpha, IsMobilePhone, IsNotEmpty, IsUUID } from "class-validator";

export class UserEditRequest {
    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    id!: string;

    @ApiProperty()
    @IsAlpha()
    @IsNotEmpty()
    name!: string;

    @ApiProperty()
    @IsAlpha()
    @IsNotEmpty()
    surname!: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsMobilePhone('en-ZA')
    mobileNumber!: string;
}
