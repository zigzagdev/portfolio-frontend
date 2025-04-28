import { mockUserProfile } from "../mock/user-profile";
import { UserProfile } from "./user-profile";

export const uploadProfileImageMock = async (file: File): Promise<UserProfile> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newImageUrl = URL.createObjectURL(file);
    return {
        ...mockUserProfile,
        id: mockUserProfile.id,
        firstName: mockUserProfile.firstName,
        lastName: mockUserProfile.lastName,
        email: mockUserProfile.email,
        profileImage: newImageUrl,
        bio: mockUserProfile.bio,
        skills: mockUserProfile.skills,
    };
};
