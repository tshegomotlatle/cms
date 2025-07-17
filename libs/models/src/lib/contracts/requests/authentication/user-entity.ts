export class UserEntity {
    id!: string;
    email?: string | null;
    email_constraint?: string | null;
    email_verified!: boolean;
    enabled!: boolean;
    federation_link?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    realm_id?: string | null;
    username?: string | null;
    created_timestamp?: number | bigint | null;
    service_account_client_link?: string | null;
    not_before!: number;
}
