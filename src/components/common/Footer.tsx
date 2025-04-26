import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const [region, setRegion] = useState<string>("");

    useEffect(() => {
        const lang = navigator.language;
        if (lang.startsWith("ja")) {
            setRegion("Japan");
        } else if (lang.startsWith("en")) {
            setRegion("USA");
        } else {
            setRegion("Global");
        }
    }, []);
    return (
        <footer className="bg-gray-100 text-gray-600 text-sm py-6 px-4 mt-8">
            <div className="flex flex-col items-center">
                <p className="mb-2">&copy; {new Date().getFullYear()} MyApp { region }. All rights reserved.</p>
                <div className="flex gap-4">
                    <Link to="/about" className="hover:underline">
                        About
                    </Link>
                    <Link to="/privacy" className="hover:underline">
                        Privacy Policy
                    </Link>
                    <Link to="/contact" className="hover:underline">
                        Contact
                    </Link>
                    <Link to="/terms" className="hover:underline">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
