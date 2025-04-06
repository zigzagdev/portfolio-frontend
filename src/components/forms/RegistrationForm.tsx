import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegistrationFormValues, registrationSchema } from '../../hooks/RegisterValidation';
import TextInput from '../ui/TextInput';
import EmailInput from '../ui/EmailInput';
import PasswordInput from '../ui/PasswordInput';
import Button from '../ui/Button';

const RegistrationForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegistrationFormValues>({
        resolver: zodResolver(registrationSchema),
    });

    const onSubmit = (data: RegistrationFormValues) => {
        console.log('✅ Submit:', data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 bg-white p-8 rounded-xl shadow-lg w-full"
        >
            <TextInput
                label="First Name"
                {...register('firstName')}
                placeholder="e.g. Taro"
                error={errors.firstName?.message}
                className="w-full"
            />

            <TextInput
                label="Last Name"
                {...register('lastName')}
                placeholder="e.g. Yamada"
                error={errors.lastName?.message}
                className="w-full"
            />

            <EmailInput
                label="Email Address"
                {...register('email')}
                placeholder="e.g. taro@example.com"
                error={errors.email?.message}
                className="w-full"
            />

            <PasswordInput
                label="Password"
                {...register('password')}
                placeholder="Minimum 6 characters"
                error={errors.password?.message}
                className="w-full"
            />

            <Button type="submit" className="w-full mt-4">
                Register
            </Button>
        </form>
    );
};

export default RegistrationForm;
