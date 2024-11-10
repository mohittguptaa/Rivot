import React from "react";

export default function ContactForm() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 max-md:flex-wrap bg-gradient-to-r from-gray-700 via-gray-600 to-blue-300">
      <div className="flex flex-col justify-center ml-5 lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to ride into the Future with NX100
        </h2>
        <p className="mt-2 text-black">
          Share your details here and we will fasten your ride to the future!
        </p>
        
        <p className="text-black "> 
              <h6>Address:</h6>
              Fifth floor, Oneness, 1st main, Sadashivnagar, Belagavi (Belgaum),
              Karnataka, India, 590001
            </p>
      </div>

        <form className="flex flex-col space-y-4 lg:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800">
            Get in touch with us
          </h3>

          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Pincode"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled
            className="py-3 font-semibold text-white transition duration-200 bg-gray-500 rounded hover:bg-gray-600"
          >
            I am Interested
          </button>

          <p className="mt-2 text-xs text-gray-900">
            By choosing to confirm, you consent to share your Ola TR & Purchase
            status with our Brand Champion and to receive calls with regard to
            your booked experience centre visit.
          </p>
        </form>
      </div>

  );
}
