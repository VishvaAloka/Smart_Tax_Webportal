import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="dark:bg-black dark:text-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold" data-aos="fade-up">
            Get in Touch
          </h1>
          <p
            className="text-gray-400 mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We’d love to hear from you! Reach out for inquiries or
            collaborations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            data-aos="zoom-in"
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaPhoneAlt className="text-5xl text-blue-500 animate-bounce" />
            <h3 className="text-xl font-semibold mt-4">Call Us</h3>
            <p className="text-gray-400 mt-2">+94 774791374</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaEnvelope className="text-5xl text-green-500 animate-bounce" />
            <h3 className="text-xl font-semibold mt-4">Email Us</h3>
            <p className="text-gray-400 mt-2">smarttax@outlook.com</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaMapMarkerAlt className="text-5xl text-red-500 animate-bounce" />
            <h3 className="text-xl font-semibold mt-4">Visit Us</h3>
            <p className="text-gray-400 mt-2">WTC East Tower, Colombo</p>
          </div>
        </div>
        <div
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="#"
            className="inline-block font-semibold py-3 px-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 duration-200 tracking-widest uppercase"
          >
            Contact Us
          </a>
        </div>
        <div
          className="mt-16 max-w-2xl mx-auto p-8 bg-gray-800 rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 h-32 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
