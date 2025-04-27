import React from "react";
import {
  FaBalanceScale,
  FaFileInvoiceDollar,
  FaUserShield,
} from "react-icons/fa";
import businessesImage from "../assets/businesses.jpg";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 min-h-screen flex items-center duration-300 -mt-6">
      <div className="container mx-auto px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right" data-aos-duration="1500">
            <img
              src={businessesImage}
              alt="Tax Services"
              className="w-full max-h-[350px] object-cover rounded-xl shadow-lg"
            />
          </div>
          <div>
            <div className="space-y-6">
              <h1
                data-aos="fade-up"
                className="text-4xl font-bold font-serif text-gray-900 dark:text-white"
              >
                About Our Tax Services
              </h1>
              <p
                data-aos="fade-up"
                className="leading-7 text-gray-700 dark:text-gray-300"
              >
                We provide expert tax consulting, ensuring compliance and
                efficiency in financial management. Our team offers professional
                guidance to help you navigate complex tax regulations with ease.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div
                  data-aos="zoom-in"
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center"
                >
                  <FaBalanceScale className="text-5xl text-blue-600 dark:text-blue-400 animate-bounce" />
                  <h3 className="text-lg font-semibold mt-4">Fair & Legal</h3>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center"
                >
                  <FaFileInvoiceDollar className="text-5xl text-green-600 dark:text-green-400 animate-bounce" />
                  <h3 className="text-lg font-semibold mt-4">Tax Filing</h3>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center"
                >
                  <FaUserShield className="text-5xl text-red-600 dark:text-red-400 animate-bounce" />
                  <h3 className="text-lg font-semibold mt-4">Data Security</h3>
                </div>
              </div>
              <button
                data-aos="fade-up"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
