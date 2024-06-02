export declare class User {
    id?: string;
    email: string;
    name: string;
    surname: string;
    mobileNumber: string;
    password?: string;
    passwordSalt?: string;
    refreshToken?: string | null;
}
