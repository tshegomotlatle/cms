import { ApiProperty } from "@nestjs/swagger";

export class User {
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
    password?: string;

    @ApiProperty()
    passwordSalt?: string;

    @ApiProperty()
    refreshToken?: string | null;
}
