import EmailInput from '../../ui/EmailInput';
import PasswordInput from '../../ui/PasswordInput';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';
import { Type } from '../../../features/auth/login/type';
import { Link } from 'react-router-dom';

const LoginForm: React.FC<Type> = ({ register, errors, loading, errorMsg, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-5 bg-white p-8 rounded-xl shadow-lg w-full">
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
                            <Spinner size="sm"/> Logging in...
                        </div>
                    ) : (
                        'Log in'
                    )}
                </Button>
            </div>
            <div className="text-right">
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                </Link>
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
