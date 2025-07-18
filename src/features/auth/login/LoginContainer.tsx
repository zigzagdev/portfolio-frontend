import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormValues } from '../../../hooks/validation/login';
import { loginUser } from '../../../lib/login';
import LoginForm from '../../../components/forms/login-form/LoginForm';
import {messages} from "../../../lib/messages";

const LoginContainer: React.FC = () => {
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
            console.log(response);
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
