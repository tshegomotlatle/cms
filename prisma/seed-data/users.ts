import { User } from "@prisma/client";

export const invoiceItems: User[] = [
    {
        id: crypto.randomUUID(),
        email: "tshegomotlatle.dev@gmail.com",
        name: "Tshego",
        surname: "Motlatle",
        mobileNumber: "0812198232",
        password: "2455",
        passwordSalt: "1234",
        refreshToken: "REFRESH_TOKEN_TEST_VALUE",
    }]