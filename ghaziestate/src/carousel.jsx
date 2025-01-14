import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sham1 from "./assets/sham1.png";
import sham2 from "./assets/sham2.png";
import sham3 from "./assets/sham3.png";
import sham4 from "./assets/sham4.png";
import sham5 from "./assets/sham5.png";
const Carousel = () => {
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
        <div id="carousel" className="max-w-4xl py-15 mt-22 mx-auto p-5 overflow-hidden">
            {/* Heading Section */}
            <h1 className="text-3xl text-green-800 font-bold text-center mb-8">
                Current Projects
            </h1>

            {/* Carousel Section */}
            <Slider {...settings}>
                <div>
                    <img
                        src={sham1}
                        alt="Image 1"
                        className="w-full rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src={sham2}
                        alt="Image 2"
                        className="w-full rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src={sham3}
                        alt="Image 3"
                        className="w-full rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src={sham4}
                        alt="Image 3"
                        className="w-full rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src={sham5}
                        alt="Image 3"
                        className="w-full rounded-lg"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
