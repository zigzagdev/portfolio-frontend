export type RegisterFormInput = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    bio?: 'man' | 'woman' | 'nonbinary' | 'other' | null;
    location?: string | null;
    skills: string[];
    profile_image?: string | null;
};
