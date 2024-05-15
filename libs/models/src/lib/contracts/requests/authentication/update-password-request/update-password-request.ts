import { ApiProperty } from "@nestjs/swagger";

export class UpdatePasswordRequest { 
    @ApiProperty()
    password!: string;

    @ApiProperty()
    userId!: string ;
}
