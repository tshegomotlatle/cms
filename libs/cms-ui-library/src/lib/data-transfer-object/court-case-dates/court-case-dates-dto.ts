export class CourtCasesDatesDto{
    id?: string;
    caseNumber!: string;
    date?:Date;
    title!:string;
    lawyerIds?: string[];
}