import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegistrationFormValues, registrationSchema } from '../../hooks/RegisterValidation';
import TextInput from '../ui/TextInput';
import EmailInput from '../ui/EmailInput';
import PasswordInput from '../ui/PasswordInput';
import Button from '../ui/Button';
import { registerUser } from '../../lib/register';

const RegistrationForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegistrationFormValues>({
        resolver: zodResolver(registrationSchema),
    });

    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const onSubmit = async (data: RegistrationFormValues) => {
        setLoading(true);
        setSuccessMsg('');
        setErrorMsg('');

        try {
            const res = await registerUser(data);
            setSuccessMsg('Registration successful!');
            console.log('✅ Server response:', res);
        } catch (err: any) {
            const msg =
                err.response?.data?.message || 'Registration failed. Please try again.';
            setErrorMsg(msg);
        } finally {
            setLoading(false);
        }
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

            <Button type="submit" className="w-full mt-4" disabled={loading}>
                {loading ? 'Submitting...' : 'Register'}
            </Button>

            {successMsg && <p className="text-green-600">{successMsg}</p>}
            {errorMsg && <p className="text-red-600">{errorMsg}</p>}
        </form>
    );
};

export default RegistrationForm;
