import React from "react";
import RegistrationForm from "../components/forms/registration-form/RegistrationForm";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
    console.log('Rendering Register page');
    return (
        <main className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 px-4">
            <section className="max-w-lg bg-white rounded-2xl shadow-2xl p-10 flex flex-col gap-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
                        Create your account
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Start your journey with us — it's quick and easy!
                    </p>
                </div>

                <RegistrationForm />

                <p className="text-sm text-center text-gray-500">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-600 font-medium hover:underline">
                        Log in
                    </Link>
                </p>
            </section>
        </main>
    );
};

export default Register;
