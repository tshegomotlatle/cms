import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber } from "class-validator";

export class AddLawyerRequest{

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email!: string

    @ApiProperty()
    @IsNotEmpty()
    @IsAlpha()
    name!: string

    @ApiProperty()
    @IsNotEmpty()
    @IsAlpha()
    surname!: string

    @ApiProperty()
    @IsNotEmpty()
    @IsPhoneNumber('ZA')
    mobileNumber!: string
}