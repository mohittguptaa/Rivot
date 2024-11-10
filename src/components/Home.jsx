import React from "react";
import Vdobg from "../Assets/video main.mp4";
import Heading from "./Heading";
import FeaturesGrid from "./FeaturesGrid";
import Slider from "./Slider";
import ContactForm from "./Contact";
import Factory from "./Factory";
import { IoIosArrowRoundForward } from "react-icons/io";

function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          src={Vdobg}
          className="absolute top-0 left-0 object-cover w-full h-full"
          autoPlay={true}
          loop={true}
          muted
        />
        <button className="absolute w-60 h-10 px-6 py-2.3 font-semibold text-white transition-all duration-300 ease-in-out transform bg-transparent border rounded-lg shadow-lg bottom-4 right-4 backdrop-blur-md border-black-200 hover:bg-gradient-to-r hover:shadow-gray-300  hover:shadow-2xl flex justify-center items-center mb-2 shadow-4xl">
          Pre Book Now <IoIosArrowRoundForward size={30}/>
        </button>
      </div>
      <Heading text="MODELS" />
      <Slider />
      <Heading text="FEATURES" />

      <FeaturesGrid />
      <Factory/>
      <ContactForm/>
    </>
  );
}

export default Home;
