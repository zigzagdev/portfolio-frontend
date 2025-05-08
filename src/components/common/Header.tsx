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
                            <Link
                                to="/profile"
                                className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                aria-label="Go to your profile page"
                                onClick={() => setMenuOpen(false)}
                            >
                                {user.profileImage ? (
                                    <img
                                        src={user.profileImage}
                                        alt=""
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                ) : (
                                    <span className="text-gray-800 font-medium">
                                        {user.firstName} {user.lastName}
                                    </span>
                                )}
                                <span className="font-medium">Profile</span>
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
                            <div className="flex items-center gap-2 mb-2">
                                {user.profileImage ? (
                                    <img
                                        src={user.profileImage}
                                        alt="User Avatar"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                ) : (
                                    <span className="text-gray-800 font-medium text-lg">
                                    {user.firstName} {user.lastName}
                                    </span>
                                )}
                            </div>

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
