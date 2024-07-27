import { ApiProperty } from "@nestjs/swagger";

export class CourtCase {
    @ApiProperty()
    id?: string;

    @ApiProperty()
    caseNumber!: string;

    @ApiProperty()
    location!: string;

    @ApiProperty()
    plaintiff!: string;

    @ApiProperty()
    defendant!: string;

    @ApiProperty()
    status!: string;

    @ApiProperty()
    type!: string | null;

    @ApiProperty()
    outcome?: string | null;

    @ApiProperty()
    lawyerId?: string;

    @ApiProperty()
    userId?: string;

    @ApiProperty()
    dateCreated!: Date;
}
