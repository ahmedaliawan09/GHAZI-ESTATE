import React from 'react';
import owner from "./assets/owner.png";
import { MdVerified } from "react-icons/md"; // Importing the verified icon

const OwnerSection = () => {
    return (
        <section id="owner" className="w-full p-6 py-20 mt-10 bg-gray-100">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
                {/* Owner's Image Placeholder */}
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <div className="w-full h-80 flex justify-center items-center">
                        <img
                            src={owner}
                            alt="Owner"
                            className="w-64 h-64 rounded-lg object-cover"
                        />
                    </div>
                </div>

                {/* Owner's Details */}
                <div className="w-full md:w-2/3 md:ml-6 text-center md:text-left">
                    <h2 className="text-2xl text-green-700 font-bold py-6 md:py-12 mb-4">Aamir Aslam Awan
                        <div
                            className="flex items-center justify-center py-3 md:justify-start text-green-700 text-lg font-medium relative -top-2 w-full flex-nowrap"
                        >
                            <span className="flex items-center max-w-full overflow-hidden">
                                <span className="text-sm sm:text-lg">
                                    Authorized Realtor of Shalimar Smart City
                                </span>
                                <MdVerified className="ml-2 text-green-500 text-xl" />
                            </span>
                        </div>





                    </h2>


                    <p className="text-lg font-bold text-green-700">Owner of Ghazi Estate</p>

                    <p className="text-base text-gray-700">
                        Aamir Aslam Awan has over 20 years of experience in the real estate industry, specializing in residential properties. His passion for helping clients find their dream homes drives his commitment to providing exceptional service and guidance throughout the entire buying and selling process.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default OwnerSection;
