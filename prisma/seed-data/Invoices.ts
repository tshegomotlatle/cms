import { guid } from "@fullcalendar/core/internal";
import { InvoiceItem } from "@prisma/client";


export const invoiceItems : InvoiceItem[] = [
    {
        id: guid().toString(),
        name: "Design Services",
        date: new Date("2024-04-01T08:00:00Z"),
        hours: 10,
        costPerHour: 50.0,
        invoiceNumber: "INV-001",
        userId: "USER-001",
        caseId: "CASE-001",
    },];

console.log(invoiceItems);
