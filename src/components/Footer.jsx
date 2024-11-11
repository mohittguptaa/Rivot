import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="py-8 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="w-full mb-8 md:w-1/3 md:mb-0">
            <h2 className="text-xl font-semibold text-gray-900">
              RIVOT MOTORS
            </h2>
            <p className="mt-2 text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <FaWhatsapp size={24} />
              </a>
            </div>
            <br />

            <h5>www.rivotmotors.com</h5>
          </div>

          {/* Middle Sections */}
          <div className="w-full mb-8 md:w-1/6 md:mb-0">
            <h3 className="font-semibold text-gray-900 pl-7">Company</h3>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  Dealership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full mb-8 md:w-1/6 md:mb-0">
            <h3 className="font-semibold text-gray-900 pl-7">Support</h3>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  Knowledge Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  Premium Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full mb-8 md:w-1/6 md:mb-0">
            <h3 className="font-semibold text-gray-900 pl-7">Products</h3>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  NX100 Classic
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  XN100 pro{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  NX100 Sports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  NX100 Max{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  NX100 Offlander{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full mb-8 md:w-1/6 md:mb-0">
            <h3 className="font-semibold text-gray-900 pl-7">Technologies</h3>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  Software
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  Manufacturing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black no-underline hover:text-gray-900"
                >
                  Performance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="flex flex-wrap items-center justify-evenly">
          <p className="text-sm text-gray-500">
            Copyright © 2024 Rivot Motors Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
