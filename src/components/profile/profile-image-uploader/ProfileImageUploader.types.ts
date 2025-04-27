export type UserProfile = {
    profileImage: string;
    firstName: string;
    lastName: string;
    email: string;
    bio?: string;
    skills?: string[];
};

export type ProfileImageUploaderProps = {
    user: UserProfile;
    previewUrl: string | null ;
    onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMsg?: string | null;
};