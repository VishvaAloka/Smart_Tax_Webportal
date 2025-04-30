import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqItems = [
    "How to obtain a Taxpayer Identification Number (TIN)?",
    "Alteration of Name or Address in the Already Issued TIN Certificate",
    "Obtaining a Temporary VAT Certificate",
    "Obtaining an Income Tax Clearance Certificate for those who do not have an Income Tax file",
  ];

  const filteredFaqs = faqItems.filter((question) =>
    question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="faq" className="dark:bg-black dark:text-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold" data-aos="fade-up">
            What can we help you with?
          </h1>
        </div>

        <div className="mb-16 flex justify-center relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search your question"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pr-12 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold" data-aos="fade-up">
            Frequently asked questions
          </h1>
        </div>

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((question, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <h3 className="text-xl font-semibold flex justify-between">
                  Q: {question}
                  <span
                    className={`text-2xl transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </h3>
                {expandedIndex === index && (
                  <p className="mt-4 text-gray-400">
                    This is the answer to the question.
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-xl text-gray-400">No results found.</p>
          )}
        </div>

        <div className="mt-12 flex justify-end items-center space-x-4" data-aos="fade-up" data-aos-delay="600">
          <p className="text-xl text-gray-400">Unable to find satisfactory answer</p>
          <a
            href="/Faqadd"
            className="inline-flex items-center font-semibold py-3 px-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 duration-200 tracking-widest uppercase"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
