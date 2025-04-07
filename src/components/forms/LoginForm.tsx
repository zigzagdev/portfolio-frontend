import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormValues, loginSchema } from '../../hooks/LoginValidation';
import EmailInput from '../ui/EmailInput';
import PasswordInput from '../ui/PasswordInput';
import Button from '../ui/Button';
import Spinner from '../ui/Spinner';
import { messages } from '../../lib/messages';
import { loginUser } from '../../lib/login';

const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const onSubmit = async (data: LoginFormValues) => {
        setLoading(true);
        setSuccessMsg('');
        setErrorMsg('');

        try {
            const res = await loginUser(data);
            setSuccessMsg(messages.success.login);
        } catch (err: any) {
            const msg = err.response?.data?.message || messages.error.login;
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
                className="w-full mb-5"
            />

            <Button type="submit" className="w-full mt-7 mb-7" disabled={loading}>
                {loading ? (
                    <div className="flex items-center justify-center gap-2">
                        <Spinner size="sm" /> Logging in...
                    </div>
                ) : (
                    'Log In'
                )}
            </Button>

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

export default LoginForm;
