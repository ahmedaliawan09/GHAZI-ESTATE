import React from 'react';

const RealEstateCard = ({ title, description, image }) => {
    return (
        <div id="realestatecard" className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(0,255,0,9)]">
            <div className="h-60 bg-gray-400 flex justify-center items-center text-white text-2xl">
                {/* Placeholder for images */}
                {image ? <img src={image} alt={title} className="w-full h-full object-cover" /> : 'Image Here'}
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default RealEstateCard;
