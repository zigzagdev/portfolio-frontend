export type UserProfile = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    bio?: string;
    location?: string;
    skills?: string[];
    profileImage?: string;
};

export async function updateUserProfile(data: Partial<UserProfile>): Promise<UserProfile> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Mock updated user:', data);
            resolve({
                id: 1,
                email: 'test@example.com',
                firstName: data.firstName || 'Taro',
                lastName: data.lastName || 'Yamada',
                bio: data.bio || '',
                location: data.location || '',
            });
        }, 1000);
    });
}