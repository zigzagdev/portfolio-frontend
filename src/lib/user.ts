export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    bio?: string;
    location?: string;
    skills?: string[];
    profileImage?: string;
};