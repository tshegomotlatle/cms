import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsEmail, IsMobilePhone, IsNotEmpty, IsStrongPassword } from "class-validator";

export class UserRegisterRequest {
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @ApiProperty()
    @IsAlpha()
    @IsNotEmpty()
    name!: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsAlpha()
    surname!: string;

    @ApiProperty()
    @IsMobilePhone('en-ZA')
    @IsNotEmpty()
    mobileNumber!: string;

    @ApiProperty()
    @IsStrongPassword()
    @IsNotEmpty()
    password!: string;
}
