import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="fixed bottom-4 right-4 flex flex-col items-center space-y-1 mb-8 mr-[-18px]">
            {/* Text above the WhatsApp icon */}
            <span className="text-sm text-white bg-green-800 p-2 rounded-md">
                Click to Contact me
            </span>

            {/* WhatsApp Icon */}
            <a
                href="https://wa.me/03006043724"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            >
                <FaWhatsapp className="w-8 h-8 text-white" />
            </a>
        </div>
    );
};

export default Footer;
