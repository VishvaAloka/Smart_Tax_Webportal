import React from "react";
import {
  FaUserFriends,
  FaBuilding,
  FaFileInvoiceDollar,
  FaDollarSign,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

const skillsData = [
  {
    name: "Individuals and Families",
    icon: (
      <FaUserFriends className="text-5xl text-blue-500 group-hover:text-white duration-300" />
    ),
    link: "#",
    description: "Tax and super information for individuals and families.",
    aosDelay: "0",
    image: "src/assets/family.jpg",
  },
  {
    name: "Businesses and Organizations",
    icon: (
      <FaBuilding className="text-5xl text-blue-500 group-hover:text-white duration-300" />
    ),
    link: "#",
    description:
      "Tax and super information for business and organisations, including not-for-profits.",
    aosDelay: "500",
    image: "src/assets/businesses.jpg",
  },
  {
    name: "Tax and professionals",
    icon: (
      <FaFileInvoiceDollar className="text-5xl text-blue-500 group-hover:text-white duration-500" />
    ),
    link: "#",
    description: "Information for tax and super professionals.",
    aosDelay: "1000",
    image: "src/assets/professionals.jpg",
  },
];

const testimonials = [
  {
    text: "Their tax services saved our business thousands last year. Highly recommended!",
    name: "Sarah Johnson",
    position: "Small Business Owner",
  },
  {
    text: "Professional, knowledgeable, and always available when I need advice.",
    name: "Michael Chen",
    position: "Freelance Consultant",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="relative dark:bg-black dark:text-white py-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50 translate-x-1/4 translate-y-1/4"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Intro Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
              OUR EXPERTISE
            </span>
            <h1
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold mb-6 font-serif leading-tight"
            >
              Why Choose Our
              <span className="relative inline-block ml-3 text-blue-600 dark:text-blue-400">
                Services
                <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300 dark:bg-yellow-600 opacity-30 -z-10 transform skew-x-3"></span>
              </span>
              <FaDollarSign className="inline-block ml-4 text-4xl text-yellow-500 animate-bounce duration-300" />
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              We provide comprehensive tax solutions with expert advice and
              personalized attention to help you achieve your financial goals.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsData.map((skill, index) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Card Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={skill.image || "/placeholder.svg"}
                    alt={skill.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30 group-hover:from-blue-900/90 group-hover:to-blue-600/70 transition-all duration-500"></div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[320px]">
                  <div className="mb-auto">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                      {skill.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {skill.name}
                  </h3>
                  <p className="text-gray-200 mb-6 opacity-90">
                    {skill.description}
                  </p>

                  <a
                    href={skill.link}
                    className="inline-flex items-center gap-2 font-semibold text-white group-hover:text-blue-200 transition-all duration-300"
                  >
                    Learn more
                    <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div
              data-aos="fade-up"
              className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-100/10 shadow-lg"
            >
              <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2">
                15+
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Years Experience
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-100/10 shadow-lg"
            >
              <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2">
                2,500+
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Happy Clients</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-100/10 shadow-lg"
            >
              <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2">
                98%
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Success Rate</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-100/10 shadow-lg"
            >
              <h3 className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2">
                $10M+
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Tax Savings</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-24 mb-10">
            <h2
              data-aos="fade-up"
              className="text-3xl font-bold text-center mb-12"
            >
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-xl relative"
                >
                  <FaQuoteLeft className="absolute top-6 left-6 text-4xl text-blue-100 dark:text-blue-900/30" />
                  <div className="ml-8">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold mr-3">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div data-aos="fade-up" className="mt-16 text-center">
            <div className="p-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-700 dark:to-blue-500 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to optimize your tax strategy?
              </h3>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                Get professional tax advice tailored to your specific needs and
                circumstances.
              </p>
              <a
                href="#contact"
                className="inline-block py-3 px-8 bg-white text-blue-600 font-medium rounded-full shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
