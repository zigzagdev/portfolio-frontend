import React from "react";
import { Link } from "react-router-dom";

export type FooterProps = {
    region: string;
};

const Footer = ({ region }: FooterProps) => {
    return (
        <footer className="bg-gray-100 text-gray-700 text-sm py-6 px-4 mt-8">
            <div className="flex flex-col items-start lg:items-center">
                <p className="mb-4">&copy; {new Date().getFullYear()} MyApp {region}. All rights reserved.</p>
                <nav className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-start lg:items-center" aria-label="Footer Navigation">
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
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
