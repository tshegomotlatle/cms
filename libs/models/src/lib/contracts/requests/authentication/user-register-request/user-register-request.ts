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
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1
    })
    @IsNotEmpty()
    password!: string;
}
