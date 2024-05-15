export class CourtCaseDto {
    id?: string;
    caseNumber!: string;
    date!: Date | null;
    location!: string;
    plaintiff!: string;
    defendant!: string;
    status!: string;
    type!: string | null;
    outcome?: string | null;
    lawyerId!: string;
    userId!: string;
    dateCreated!: Date;
}
