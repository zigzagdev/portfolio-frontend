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

export function getDefaultUserProfileValues(): Partial<User> {
    return {
        firstName: '',
        lastName: '',
        email: '',
        bio: '',
        location: '',
        skills: [],
        profileImage: '',

    };
}