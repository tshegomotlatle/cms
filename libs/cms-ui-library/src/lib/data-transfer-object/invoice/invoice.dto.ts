export class InvoiceDto {
    id?: string;
    invoiceNumber!: string;
    name!: string;
    date!: Date;
    hours!: number;
    costPerHour!: number;
    caseNumber!: string;
    userId!: string;
}
