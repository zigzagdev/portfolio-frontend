import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Spinner from "../ui/Spinner";

const Header = () => {
    const { user, loading, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    if (loading) return <Spinner />;

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <header className="bg-white shadow px-6 py-4">
            <div className="flex justify-between items-center">
                <Link to="/" className="text-lg font-bold text-gray-800">
                    MyApp
                </Link>

                <button
                    className="md:hidden text-gray-600 focus:outline-none"
                    onClick={toggleMenu}
                >
                    ☰
                </button>

                <nav className="hidden md:flex gap-4 items-center">
                    {user ? (
                        <>
                            <Link to="/profile" className="text-blue-600 hover:underline">
                                My Profile
                            </Link>
                            <button
                                onClick={logout}
                                className="text-red-600 hover:underline"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-gray-600 hover:underline">
                                Login
                            </Link>
                            <Link to="/register" className="text-gray-600 hover:underline">
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </div>

            {menuOpen && (
                <nav className="md:hidden mt-4 flex flex-col gap-2">
                    {user ? (
                        <>
                            <Link
                                to="/profile"
                                className="text-blue-600 hover:underline"
                                onClick={() => setMenuOpen(false)}
                            >
                                My Profile
                            </Link>
                            <button
                                onClick={() => {
                                    logout();
                                    setMenuOpen(false);
                                }}
                                className="text-red-600 hover:underline text-left"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="text-gray-600 hover:underline"
                                onClick={() => setMenuOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="text-gray-600 hover:underline"
                                onClick={() => setMenuOpen(false)}
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            )}
        </header>
    );
};

export default Header;
