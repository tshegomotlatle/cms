import { ApiProperty } from "@nestjs/swagger";
import { CourtCasesDates } from "../court-case-dates/court-case-dates";
import { CourtCase } from "../court-case/court-case";
import { User } from "../user/user";

export class Lawyer {
    @ApiProperty()
    id?: string;

    @ApiProperty()
    email!: string;

    @ApiProperty()
    name!: string;

    @ApiProperty()
    surname!: string;

    @ApiProperty()
    mobileNumber!: string;

    @ApiProperty()
    courtCase?: Array<CourtCase> | undefined;

    @ApiProperty()
    courtCaseDates?: Array<CourtCasesDates> | undefined;

    @ApiProperty()
    users?: Array<User> | undefined;
}
