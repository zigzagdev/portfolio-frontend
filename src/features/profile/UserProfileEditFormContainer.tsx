import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserProfileEditFormValues, userProfileEditSchema } from '../../hooks/validation/user-profile-edit';
import UserProfileEditForm from '../../components/profile/ProfileEditForm';
import { getDefaultUserProfileValues } from "../../lib/user";
import {messages} from "../../lib/messages";
import { updateUserProfile } from "../../lib/user-profile";
import { useAuth } from "../../context/AuthContext";


type Props = {
    onComplete?: () => void;
};

const UserProfileEditFormContainer: React.FC<Props> = ({onComplete}) => {
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();

    const {
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<UserProfileEditFormValues>({
        resolver: zodResolver(userProfileEditSchema),
        defaultValues: getDefaultUserProfileValues(),
    });

    useEffect(() => {
        if (user) {
            reset({
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                bio: user.bio || '',
                location: user.location || '',
            });
        }
    }, [user, reset]);

    const onSubmit = async (data: UserProfileEditFormValues) => {
        setSuccessMsg('');
        setErrorMsg('');
        setLoading(true);

        try {
            const updatedUser = await updateUserProfile(data);
            console.log('Updated user:', updatedUser);
            setSuccessMsg(messages.success.update.profile.success);
            if (onComplete) {
                onComplete();
            }
        } catch {
            setErrorMsg(messages.error.update.profile.default);
        } finally {
            setLoading(false);
        }
    };

    return (
        <UserProfileEditForm
            user={user!}
            onChange={(updated) =>
                reset((prev) =>
                    ({ ...prev, ...updated }), { keepErrors: true })
            }
            onSubmit={handleSubmit(onSubmit)}
            successMsg={successMsg}
            errorMsg={Object.values(errors)[0]?.message || errorMsg}
            loading={loading}
        />
    );
};

export default UserProfileEditFormContainer;
