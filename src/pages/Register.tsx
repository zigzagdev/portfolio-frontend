import React from "react";
import RegistrationForm from "../components/forms/RegistrationForm";

const Register: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
                    Create your account
                </h1>
                <p className="text-center text-gray-500 text-sm mb-8">
                    Join us and explore the network
                </p>
                <RegistrationForm />
            </div>
        </div>
    );
};

export default Register;
