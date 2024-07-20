import { ApiResponseProperty } from "@nestjs/swagger";

export class UserResponse {
    @ApiResponseProperty()
    id?: string;

    @ApiResponseProperty()
    email!: string;

    @ApiResponseProperty()
    name!: string;

    @ApiResponseProperty()
    surname!: string;

    @ApiResponseProperty()
    mobileNumber!: string;

    @ApiResponseProperty()
    password?: string;

    @ApiResponseProperty()
    passwordSalt?: string;

    @ApiResponseProperty()
    refreshToken?: string | null;
}
