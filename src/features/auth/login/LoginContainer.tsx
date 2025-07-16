import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormValues } from '../../../hooks/validation/login';
import { loginUser } from '../../../lib/login';
import LoginForm from '../../../components/forms/login-form/LoginForm';
import { messages } from "../../../lib/messages";
import { User, fetchUserProfile } from "../../../lib/user";

const LoginContainer: React.FC = () => {
    const navigate = useNavigate();
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
            const response = await loginUser(data);
            const payload = response.data;

            if (response.status === 'success' && payload.user) {
                const user = payload.user;

                localStorage.setItem('userId', user.id.toString());
                localStorage.setItem('token', user.token || '');

                const userProfile: User = await fetchUserProfile(user.id.toString(), user.token || '');

                navigate('/dashboard');

            }

            setErrorMsg(messages.error.login.default);
        } catch (error) {
            setErrorMsg(messages.error.login.default);
        } finally {
            setLoading(false);
        }
    };

    return (
        <LoginForm
            register={register}
            errors={errors}
            loading={loading}
            errorMsg={errorMsg}
            onSubmit={handleSubmit(onSubmit)}
        />
    );
};

export default LoginContainer;
