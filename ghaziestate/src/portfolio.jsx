import React from 'react';
import Navbar from './navbar.jsx';
import Carousel from './carousel.jsx';
import Carousel2 from './carousel2.jsx';
import MercuryText from './mercurytext.jsx';
import MercuryText2 from './mercury2.jsx';
import RealEstateCard from './realestatecard.jsx';
import OwnerSection from './ownersection.jsx';
import Footer from './footer.jsx';
import Footer2 from './footer2.jsx';
import pro1 from "./assets/pro1.png";
import pro2 from "./assets/pro2.png";
const Portfolio = () => {
    return (
        <div className="font-sans bg-gray-100">
            <Navbar />
            <OwnerSection />
            <Carousel />
            <MercuryText />

            <section id="properties" className="py-10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl text-center text-green-800 font-bold mb-6">Featured Properties</h2>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <RealEstateCard
                                title="Modern Appartments"
                                description="Beautiful Modern Appartments in prime location."
                                image={pro1} // Add image URL later
                            />
                            <RealEstateCard
                                title="Luxury Houses"
                                description="Stylish,Luxury Houses with great amenities."
                                image={pro2}// Add image URL later
                            />
                        </div>
                    </div>
                    <Carousel2 />

                    <Footer />
                </div>
            </section>
            <MercuryText2 />
            <Footer2 />
        </div>
    );
}

export default Portfolio;
