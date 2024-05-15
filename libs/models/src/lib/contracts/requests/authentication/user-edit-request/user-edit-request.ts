import { ApiProperty } from "@nestjs/swagger";

export class UserEditRequest {
    @ApiProperty()
    id!: string;

    @ApiProperty()
    name!: string;

    @ApiProperty()
    surname!: string;

    @ApiProperty()
    mobileNumber!: string;
}
