import { PrismaClient } from '@prisma/client';
import { CourtCases } from './court-cases';

const prisma = new PrismaClient();

async function main() {
    prisma.$connect();
    for (let courtCase of CourtCases) {
        await prisma.courtCase.create({
            data: courtCase
        })
    }
}


main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
})