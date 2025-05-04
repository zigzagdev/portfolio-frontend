export type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    bio?: string;
    location?: string;
    skills?: string[];
    profileImage?: string;
};