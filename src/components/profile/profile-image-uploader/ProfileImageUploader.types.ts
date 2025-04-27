import { UserProfile } from '../../../lib/user-profile';

export type ProfileImageUploaderProps = {
    user: UserProfile;
    previewUrl: string | null ;
    onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMsg?: string | null;
};