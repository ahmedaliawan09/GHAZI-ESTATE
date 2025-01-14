import React, { useEffect, useState } from 'react';
import ghazi from "./assets/ghazi.png";
import "./index.css";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true); // User scrolled
            } else {
                setIsScrolled(false); // User is at the top
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`w-full fixed top-0 left-0 z-50 text-white p-2 py-0 sm:py-0 transition-colors duration-300 ${isScrolled ? "bg-green-700 shadow-lg" : "bg-green-800"
                }`}
        >
            <div className="flex justify-between items-center">
                {/* Logo Placeholder */}
                <a href="#owner">
                    <div className="w-30 h-28 flex justify-center items-center ml-3">
                        <img src={ghazi} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                </a>

                {/* Navbar links for larger screens */}
                <div className="hidden md:flex space-x-6 mr-20">
                    <a href="#carousel" className="text-lg">Projects</a>
                    <a href="#realestatecard" className="text-lg">Properties</a>
                    <a href="#carousel2" className="text-lg">Investment</a>
                    <a href="#footer2" className="text-lg">Contact</a>
                </div>

                {/* Navbar links for smaller screens in a single line without wrapping */}
                <div className="md:hidden flex justify-between space-x-4 text-sm w-full">
                    <a href="#carousel" className="block">Projects</a>
                    <a href="#realestatecard" className="block">Properties</a>
                    <a href="#carousel2" className="block">Investment</a>
                    <a href="#footer2" className="block">Contact</a>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
