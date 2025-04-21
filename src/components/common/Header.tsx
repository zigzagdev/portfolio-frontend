import React from "react";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b shadow-sm h-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                <div className="text-lg font-semibold text-gray-800">
                    MyApp
                </div>
                <nav className="hidden md:flex gap-6">
                    <a href="#about" className="text-sm text-gray-600 hover:text-black transition">
                        Profile
                    </a>
                    <a href="#features" className="text-sm text-gray-600 hover:text-black transition">
                        Features
                    </a>
                </nav>

                <div className="flex items-center gap-4">
                    <a href="#login" className="text-sm text-gray-600 hover:text-black transition">
                        Log in
                    </a>
                    <a
                        href="#signup"
                        className="text-sm bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
