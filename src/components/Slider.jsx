import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Assets/nx.png";
import img3 from "../Assets/nx3.png";
import img4 from "../Assets/nx4.png";
import img5 from "../Assets/nx5.png";
import img6 from "../Assets/nx6.png";


function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div id="model" className="slider-container">
        <Slider {...settings}>
          <div>
            <img height="300px" width="1590px" src={img1} alt="" />
          </div>
          <div>
            <img height="300px" width="1590px" src={img3} alt="" />
          </div>
          <div>
            <img height="300px" width="1590px" src={img4} alt="" />
          </div>
          <div>
            <img height="300px" width="1590px" src={img5} alt="" />
          </div>
          <div>
            <img height="300px" width="1590px" src={img6} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default SimpleSlider;
