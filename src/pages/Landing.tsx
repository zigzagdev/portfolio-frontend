import React from "react";
import logo from "../assets/react.svg";

export const Landing: React.FC = () => {
    return (
        <main
            className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
            <section
                className="max-w-3xl w-full bg-white p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Connect with professionals
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Build your network, share ideas, and grow your career. Join our community and start engaging
                        today.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <a
                            href="/register"
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                        >
                            Join Now
                        </a>
                        <a
                            href="/login"
                            className="text-indigo-600 font-semibold px-6 py-3 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img src={logo} alt="Logo" className="w-40 md:w-56"/>
                </div>
            </section>
        </main>
    );
}