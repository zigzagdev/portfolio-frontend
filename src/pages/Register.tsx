import React from "react";
import RegistrationForm from "../components/forms/RegistrationForm";

const Register: React.FC = () => {
    return (
        <main className="flex justify-center min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 px-4">
            <section className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-10">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
                    Sign Up
                </h1>
                <p className="text-center text-gray-600 mb-6">
                    Start your journey with us — it's quick and easy!
                </p>
                <RegistrationForm />
                <p className="text-sm text-center text-gray-500 mt-6">
                    Already have an account?{" "}
                    <a href="/login" className="text-indigo-600 hover:underline">
                        Log in
                    </a>
                </p>
            </section>
        </main>
    );
};

export default Register;
