import { ApiProperty } from "@nestjs/swagger";

export class UserEmailRequest {
    @ApiProperty()
    email!: string;
}
