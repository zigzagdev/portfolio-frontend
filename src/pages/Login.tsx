import React from "react";
import LoginForm from "../components/forms/login-form/LoginForm";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

type LoginFormValues = {
    email: string;
    password: string;
};

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>();

    const onSubmit = (data: LoginFormValues) => {
        console.log(data);
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 px-4">
            <section className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-10 flex flex-col gap-y-6">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
                    Log In
                </h1>
                <p className="text-center text-gray-600 mb-10">
                    Welcome back! Please log in to continue.
                </p>
                <LoginForm
                    register={register}
                    errors={errors}
                    loading={false}
                    errorMsg=""
                    onSubmit={handleSubmit(onSubmit)}
                />
                <p className="text-sm text-center text-gray-500 mt-2 pt-8">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-indigo-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </section>
        </main>
    );
};

export default Login;
