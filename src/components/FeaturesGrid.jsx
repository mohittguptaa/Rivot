import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrow : true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  return (
    <div id="about" className="gap-2 slider-container">
      <Slider {...settings}>
      <div className="p-4 bg-white rounded-lg shadow-md">
            <img src="https://e-vehicleinfo.com/wp-content/uploads/2024/07/1631543648511.webp" alt="Proximity unlock" className="mb-4 rounded-t-lg" />
            <h2 className="text-lg font-semibold text-gray-900">Proximity unlock</h2>
            <p className="text-gray-600">Unlocks only when you're around. It likes you like that.</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md">
            <img src="https://e-vehicleinfo.com/wp-content/uploads/2024/07/1631543648511.webp" alt="Ola Electric App" className="mb-4 rounded-t-lg" />
            <h2 className="text-lg font-semibold text-gray-900">App Connectivity</h2>
            <p className="text-gray-600">Control your scooter. Right from your phone.</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md">
            <img src="https://e-vehicleinfo.com/wp-content/uploads/2024/07/1631543648511.webp" alt="Navigation" className="mb-4 rounded-t-lg" />
            <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
            <p className="text-gray-600">Navigate with ease and explore the city. With Ola Maps.</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md">
            <img src="https://e-vehicleinfo.com/wp-content/uploads/2024/07/1631543648511.webp" alt="Hill Hold" className="mb-4 rounded-t-lg" />
            <h2 className="text-lg font-semibold text-gray-900">Hill Hold</h2>
            <p className="text-gray-600">Hold your place on slopes. Hands-free.</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md">
            <img height='500px' src="https://e-vehicleinfo.com/wp-content/uploads/2024/07/1631543648511.webp" alt="Auto Turn-off Indicator" className="mb-4 rounded-t-lg" />
            <h2 className="text-lg font-semibold text-gray-900">Auto Turn-off Indicator</h2>
            <p className="text-gray-600">Indicators turn off automatically after a turn. Just like a car.</p>
          </div>
          
          
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img src="https://e-vehicleinfo.com/wp-content/uploads/2024/07/1631543648511.webp" alt="Moods" className="mb-4 rounded-t-lg" />
            <h2 className="text-lg font-semibold text-gray-900">Moods</h2>
            <p className="text-gray-600">Go retro or go racing. Now match the ride to your mood.</p>
          </div>
          
      </Slider>
    </div>
  );
}

export default CenterMode;
