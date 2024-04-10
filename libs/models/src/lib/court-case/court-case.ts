export class CourtCase {
    id!: string;
    caseNumber!: string;
    date!: Date;
    location!: string;
    plaintiff!: string;
    defendant!: string;
    status!: string;
    type!: string | null;
    outcome!: string | null;
    lawyerId!: string;
    userId!: string;
    dateCreated!: Date;
}
