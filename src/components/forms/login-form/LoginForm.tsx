import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormValues, loginSchema } from '../../../hooks/login-validation';
import EmailInput from '../../ui/EmailInput';
import PasswordInput from '../../ui/PasswordInput';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';

const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const onSubmit = async (data: LoginFormValues) => {
        setLoading(true);
        setErrorMsg('');

        try {
            console.log('Submitting login form with data:', data);
            await new Promise((resolve) => setTimeout(resolve, 1000));
        } catch (err) {
            setErrorMsg('Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 bg-white p-8 rounded-xl shadow-lg w-full"
        >
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
                error={errors.password?.message}
                className="w-full mb-5"
            />

            <div className="mt-10 mb-6">
                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                        <div className="flex items-center justify-center gap-2">
                            <Spinner size="sm" /> Logging in...
                        </div>
                    ) : (
                        'Log in'
                    )}
                </Button>
            </div>

            {errorMsg && (
                <p className="text-sm text-red-700 font-medium bg-red-100 p-2 rounded">
                    {errorMsg}
                </p>
            )}
        </form>
    );
};

export default LoginForm;
