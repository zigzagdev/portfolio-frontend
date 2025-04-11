import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegistrationFormValues, registrationSchema } from '../../hooks/RegisterValidation';
import TextInput from '../ui/TextInput';
import EmailInput from '../ui/EmailInput';
import PasswordInput from '../ui/PasswordInput';
import Button from '../ui/Button';
import { registerUser } from '../../lib/register';
import { messages } from '../../lib/messages';
import Spinner from '../ui/Spinner';
import { useNavigate } from 'react-router-dom';

const RegistrationForm: React.FC = () => {
    const navigate = useNavigate();
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
            setSuccessMsg(messages.success.registration);

            navigate('/dashboard');
        } catch (err: any) {
            const msg =
                err.response?.data?.message || messages.error.registration;
            setErrorMsg(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 bg-white p-8 rounded-xl shadow-lg"
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
                className="w-full mb-5 mt-10"
            />

            <div className="mt-10">
                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                        <div className="flex items-center justify-center gap-2">
                            <Spinner size="sm" /> Submitting...
                        </div>
                    ) : (
                        'Register'
                    )}
                </Button>
            </div>

            {successMsg && (
                <p className="text-sm text-green-600 font-medium bg-green-100 p-2 rounded">
                    {successMsg}
                </p>
            )}
            {errorMsg && (
                <p className="text-sm text-red-600 font-medium bg-red-100 p-2 rounded">
                    {errorMsg}
                </p>
            )}

        </form>
    );
};

export default RegistrationForm;
