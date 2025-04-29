import { UserProfile } from '../../../lib/user-profile';

export type ProfileImageUploaderProps = {
    user: UserProfile;
    uploadedImageUrl?: string | null;
    previewUrl?: string | null;
    onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMsg?: string | null;
    successMsg?: string | null;
};