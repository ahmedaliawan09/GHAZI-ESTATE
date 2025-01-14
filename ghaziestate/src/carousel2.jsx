import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import invest1 from "./assets/invest1.png";
import invest2 from "./assets/invest2.png";
import invest3 from "./assets/invest3.png";
const Carousel2 = () => {
    const settings = {
        dots: true,
        infinite: true, // Enables looping
        speed: 500,
        slidesToShow: 1, // Shows one slide at a time for responsiveness
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // Enables forward/backward arrows
        responsive: [
            {
                breakpoint: 768, // Small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // Medium screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div id="carousel2" className="max-w-xl py-20 mt-22 mx-auto p-5 overflow-hidden">
            {/* Heading Section */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-green-800 font-bold text-center mb-8 px-4 sm:px-6 md:px-8">
                GOOD TIME TO INVEST IN SHALIMAR SMART CITY
            </h1>







            {/* Carousel Section */}
            <Slider {...settings}>
                <div>
                    <img
                        src={invest3}
                        alt="Image 1"
                        className="w-full rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src={invest1}
                        alt="Image 2"
                        className="w-full rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src={invest2}
                        alt="Image 3"
                        className="w-full rounded-lg"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel2;
