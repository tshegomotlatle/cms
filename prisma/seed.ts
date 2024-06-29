import { PrismaClient } from "@prisma/client";
import { invoiceItems } from "./seed-data/Invoices";

const prisma = new PrismaClient();

async function main() {
    prisma.$connect();
    // for (let courtCase of CourtCases) {
    //     await prisma.courtCase.create({
    //         data: courtCase
    //     })
    // }

    for (let invoice of invoiceItems)
        {
            await prisma.invoiceItem.create({
                data: invoice
            })

        }
}


main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
})