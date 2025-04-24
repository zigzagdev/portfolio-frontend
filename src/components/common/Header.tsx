import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Spinner from "../ui/Spinner"

const Header = () => {
    const { user, loading, logout } = useAuth();

    if (loading) return <Spinner />;

    return (
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
            <Link to="/" className="text-lg font-bold text-gray-800">
                MyApp
            </Link>

            <nav>
                {user ? (
                    <ul className="flex gap-4 items-center">
                        <li>
                            <Link to="/profile" className="text-blue-600 hover:underline">
                                My Profile
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={logout}
                                className="text-red-600 hover:underline"
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                ) : (
                    <ul className="flex gap-4 items-center">
                        <li>
                            <Link to="/login" className="text-gray-600 hover:underline">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="text-gray-600 hover:underline">
                                Register
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;
