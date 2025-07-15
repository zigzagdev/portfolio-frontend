
export type LoginFormInput = {
    email: string;
    password: string;
};

export type LoginResponse = {
    status: string;
    data: {
        user: {
            id: number;
            email: string;
            token?: string;
        };
        token?: string;
    };
}