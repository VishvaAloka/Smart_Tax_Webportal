import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css"; // Import animate.css for easy animations

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[#150925] text-white py-10 px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Logo and Quote */}
          <div className="relative md:border-r border-white/20 pr-6">
            <div className="font-serif text-4xl md:text-5xl mb-4">
              Smart Tax
              <i
                className="fa-sharp fa-thin fa-copyright text-sm ml-2"
                style={{ color: "#ffffff" }}
              ></i>
            </div>

            <p className="font-serif italic text-base md:text-lg mb-6 text-white/90 leading-relaxed">
              "Explore Smart tax system with ease—access resources on
              regulations, compliance, and services for a transparent and
              efficient tax experience."
            </p>

            <button className="border border-white/30 hover:border-white/60 text-white px-4 py-2 rounded-lg flex items-center">
              GIVE TO SMART-TAX
              <i
                className="fa-duotone fa-arrow-right animate-pulse ml-2"
                style={{ color: "#a0f1ac" }}
              ></i>
            </button>

            <div className="text-xs mt-8 text-white/70 flex items-center">
              <i
                className="fa-sharp fa-thin fa-copyright text-sm mr-2"
                style={{ color: "#ffffff" }}
              ></i>
              2025 SMARTTAX, Inc
            </div>
          </div>

          {/* Middle Column - Navigation and Contact */}
          <div className="space-y-8">
            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8">
              {[
                { label: "Home", href: "/" },
                { label: "Payment", href: "/payment-methods" },
                { label: "FAQ", href: "/frequently-asked-questions" },
                { label: "About US", href: "/about" },
                { label: "Contact US", href: "/contactus" },
                { label: "Community", href: "/STO" },
              ].map(({ label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-white hover:text-white/80 transition-colors px-4 border-r last:border-none"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Contact Information */}
            <div className="border border-white/30 rounded-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 text-[#2563EB]">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fa-solid fa-phone text-amber-300 animate-bounce mr-3"></i>
                  <span className="text-base">077 479 1374</span>
                </div>

                <div className="flex items-center">
                  <i className="fa-solid fa-envelope text-[#4A90E2] animate-pulse mr-3"></i>
                  <span className="text-base">smarttax@outlook.com</span>
                </div>

                <div className="flex items-center">
                  <i className="fa-solid fa-location-dot text-[#4A90E2] mr-3"></i>
                  <span className="text-base">WTC East Tower, Colombo</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex justify-center space-x-3 mt-6">
              {["twitter", "linkedin", "instagram", "facebook", "youtube"].map(
                (social, index) => (
                  <button
                    key={index}
                    className="bg-[#4A7BFF] hover:bg-[#3A6BEF] rounded-full h-8 w-8 flex items-center justify-center animate-pulse hover:animate-none"
                  >
                    <i className={`fa-brands fa-${social} text-white`}></i>
                  </button>
                )
              )}
            </div>
          </div>

          {/* Right Column - Newsletter */}
          <div className="flex items-center justify-center">
            <div className="border border-white/30 rounded-md p-6 max-w-md">
              <h3 className="text-left font-medium mb-4">What's New</h3>

              <div className="flex">
                <input
                  placeholder="Your email here"
                  className="rounded-r-none bg-white/10 border-white/20 text-white px-3 py-2 flex-1"
                />
                <button className="rounded-l-none bg-[#3844ca] hover:bg-[#2834ba] px-4 py-2 text-white">
                  Subscribe
                  <i className="fa-solid fa-paper-plane animate-pulse ml-2"></i>
                </button>
              </div>
              
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
