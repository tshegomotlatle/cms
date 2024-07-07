import { ApiProperty } from "@nestjs/swagger";
import { CourtCasesDates } from "../court-case-dates/court-case-dates";
import { CourtCase } from "../court-case/court-case";
import { User } from "../user/user";
import { IS_ALPHA, IsAlpha, IsArray, IsEmail, IsNotEmpty, IsPhoneNumber, isArray } from 'class-validator';

export class Lawyer {
    @ApiProperty()
    id?: string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsAlpha()
    name!: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsAlpha()
    surname!: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsPhoneNumber('ZA')
    mobileNumber!: string;

    @ApiProperty()
    courtCase?: Array<CourtCase> | undefined;

    @ApiProperty()
    courtCaseDates?: Array<CourtCasesDates> | undefined;

    @ApiProperty()
    users?: Array<User> | undefined;
}
