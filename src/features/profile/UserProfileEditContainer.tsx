import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserProfileEditFormValues, userProfileEditSchema } from '../../hooks/validation/user-profile-edit';
import UserProfileEditForm from '../../components/profile/ProfileEditForm';
import { mockUser } from "../../mock/user";

const UserProfileEditFormContainer: React.FC = () => {
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const {
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<UserProfileEditFormValues>({
        resolver: zodResolver(userProfileEditSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            bio: '',
            location: '',
        },
    });

    const onSubmit = async (data: UserProfileEditFormValues) => {
        setSuccessMsg('');
        setErrorMsg('');
        setLoading(true);

        try {
            console.log('Submitting form:', data);
            setSuccessMsg('Profile updated!');
        } catch (err) {
            setErrorMsg('Failed to update profile.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <UserProfileEditForm
            user={mockUser}
            onChange={(updated) => reset((prev) => ({ ...prev, ...updated }), { keepErrors: true })}
            onSubmit={handleSubmit(onSubmit)}
            successMsg={successMsg}
            errorMsg={Object.values(errors)[0]?.message || errorMsg}
            loading={loading}
        />
    );
};

export default UserProfileEditFormContainer;
