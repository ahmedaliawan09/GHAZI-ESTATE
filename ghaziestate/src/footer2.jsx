import React from 'react';
import { FaWhatsapp, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const Footer2 = () => {
    return (
        <footer id="footer2" className="bg-green-800 text-white py-12">
            <div className="flex justify-center space-x-8">
                {/* WhatsApp Icon */}
                <a
                    href="https://wa.me/03006043724"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-green-500"
                >
                    <FaWhatsapp />
                </a>

                {/* Facebook Icon */}
                <a
                    href="https://www.facebook.com/aamir.aslamawan.1?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-blue-600"
                >
                    <FaFacebookF />
                </a>

                {/* Mail Icon */}
                <a
                    href="mailto:ahmedawan81151@gmail.com"
                    className="text-3xl hover:text-red-500"
                >
                    <FaEnvelope />
                </a>
            </div>

            <div className="text-center mt-4 text-sm">
                <p>&copy; GhaziEstate | January 2025</p>
            </div>
        </footer>
    );
};

export default Footer2;
