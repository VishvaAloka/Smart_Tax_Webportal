import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import {
  Calendar,
  Calculator,
  FileText,
  DollarSign,
  TrendingUp,
  BadgeCheck,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import STO from "./STO";

const Hero = ({ theme }) => {
  // Australian tax key dates for the current tax year
  const taxDates = [
    { date: "1 July", description: "Start of financial year" },
    { date: "31 October", description: "Tax return deadline" },
    { date: "21 each month", description: "BAS lodgment due" },
    { date: "30 June", description: "End of financial year" },
  ];

  // Main tax services with animated icons
  const taxServices = [
    {
      icon: <FileText className="w-6 h-6 animate-pulse-slow" />,
      title: "Tax Returns",
      description: "Simple & complex returns for individuals",
      color: "blue",
    },
    {
      icon: <DollarSign className="w-6 h-6 animate-bounce-slow" />,
      title: "Tax Refunds",
      description: "Maximize your eligible deductions",
      color: "green",
    },
    {
      icon: <TrendingUp className="w-6 h-6 animate-slide-up" />,
      title: "Business Tax",
      description: "ABN, GST & company returns",
      color: "purple",
    },
    {
      icon: <BadgeCheck className="w-6 h-6 animate-spin-slow" />,
      title: "STO Compliance",
      description: "Stay compliant with tax laws",
      color: "orange",
    },
  ];

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?q=80&w=1920&auto=format&fit=crop",
      title: "Expert Smart Tax Solutions",
      subtitle: "Maximize your refund with our STO-compliant tax services",
      ctaText: "Start Your Return",
      icon: <CheckCircle className="w-6 h-6 animate-pulse-slow" />,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1920&auto=format&fit=crop",
      title: "Personal & Business Tax",
      subtitle: "From individual returns to complex business structures",
      ctaText: "Explore Services",
      icon: <TrendingUp className="w-6 h-6 animate-slide-up" />,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=1920&auto=format&fit=crop",
      title: "Stay On Top of Tax Changes",
      subtitle: "Navigate the latest STO regulations with confidence",
      ctaText: "Learn More",
      icon: <AlertCircle className="w-6 h-6 animate-pulse-slow" />,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="dark:bg-gray-900 dark:text-white duration-300 relative">
      {/* Hero Slider Section with enhanced animations */}
      <div className="relative w-full h-[700px] md:h-[750px] lg:h-[800px] -mt-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          loop={true}
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative">
              {/* Gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>

              {/* Background image with subtle zoom effect */}
              <div className="absolute inset-0 overflow-hidden h-full">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={`Australian Tax Services - ${slide.title}`}
                  className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
                />
              </div>

              {/* Content overlay with staggered animations */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-2 sm:px-4">
                <div
                  className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {/* Animated badge */}
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20 animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-white/90 text-sm font-medium">
                      Smart Tax Office
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-slide-up-delayed">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
                    {slide.subtitle}
                  </p>
                  <button
                    className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all 
                    shadow-lg hover:shadow-blue-500/30 flex items-center gap-3 mx-auto animate-bounce-slow"
                  >
                    {slide.icon}
                    {slide.ctaText}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Animated Australian map logo watermark */}
        <div className="absolute bottom-6 right-6 z-30 opacity-30 animate-pulse-slow">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M85.4,29.7c0.4-0.6,0.3-1.5-0.3-1.9c-0.6-0.4-1.5-0.3-1.9,0.3l-3.2,4.7c-0.3,0.5-0.3,1.1,0,1.6l2.2,3.2
                  c0.4,0.6,1.3,0.7,1.9,0.3c0.6-0.4,0.7-1.3,0.3-1.9l-1.6-2.3L85.4,29.7z"
              fill="currentColor"
            />
            <path
              d="M79.1,40.5c0.4-0.6,0.3-1.5-0.3-1.9c-0.6-0.4-1.5-0.3-1.9,0.3l-4.8,7c-0.3,0.5-0.3,1.1,0,1.6l3.2,4.7
                  c0.4,0.6,1.3,0.7,1.9,0.3c0.6-0.4,0.7-1.3,0.3-1.9l-2.6-3.8L79.1,40.5z"
              fill="currentColor"
            />
            <path
              d="M73.4,55.6c0.4-0.6,0.3-1.5-0.3-1.9c-0.6-0.4-1.5-0.3-1.9,0.3l-2.2,3.2c-0.3,0.5-0.3,1.1,0,1.6l1.6,2.4
                  c0.4,0.6,1.3,0.7,1.9,0.3c0.6-0.4,0.7-1.3,0.3-1.9l-1-1.5L73.4,55.6z"
              fill="currentColor"
            />
            <path
              d="M66.1,62.5c-0.6-0.4-1.5-0.3-1.9,0.3l-7,10.2c-0.3,0.5-0.3,1.1,0,1.6l2.9,4.3c0.4,0.6,1.3,0.7,1.9,0.3
                  c0.6-0.4,0.7-1.3,0.3-1.9l-2.3-3.4l6.4-9.3C66.8,63.8,66.7,62.9,66.1,62.5z"
              fill="currentColor"
            />
            <path
              d="M59.6,56.4c-0.4,0.6-0.3,1.5,0.3,1.9c0.6,0.4,1.5,0.3,1.9-0.3l2.2-3.2c0.3-0.5,0.3-1.1,0-1.6l-1.6-2.3
                  c-0.4-0.6-1.3-0.7-1.9-0.3c-0.6,0.4-0.7,1.3-0.3,1.9l0.9,1.4L59.6,56.4z"
              fill="currentColor"
            />
            <path
              d="M53.4,31.6c-0.6-0.4-1.5-0.3-1.9,0.3l-5.1,7.5c-0.3,0.5-0.3,1.1,0,1.6l3.5,5.1c0.4,0.6,1.3,0.7,1.9,0.3
                  c0.6-0.4,0.7-1.3,0.3-1.9l-2.9-4.2l4.6-6.6C54.1,32.9,54,32,53.4,31.6z"
              fill="currentColor"
            />
            <path
              d="M44.3,27c0.4-0.6,0.3-1.5-0.3-1.9c-0.6-0.4-1.5-0.3-1.9,0.3l-2.9,4.2c-0.3,0.5-0.3,1.1,0,1.6l2.2,3.2
                  c0.4,0.6,1.3,0.7,1.9,0.3c0.6-0.4,0.7-1.3,0.3-1.9l-1.6-2.3L44.3,27z"
              fill="currentColor"
            />
            <path
              d="M31.4,43.4c-0.4,0.6-0.3,1.5,0.3,1.9c0.6,0.4,1.5,0.3,1.9-0.3l4.8-7c0.3-0.5,0.3-1.1,0-1.6l-3.2-4.7
                  c-0.4-0.6-1.3-0.7-1.9-0.3c-0.6,0.4-0.7,1.3-0.3,1.9l2.6,3.8L31.4,43.4z"
              fill="currentColor"
            />
            <path
              d="M24.4,39.9c-0.6-0.4-1.5-0.3-1.9,0.3l-8.3,12.1c-0.3,0.5-0.3,1.1,0,1.6l4.5,6.6c0.4,0.6,1.3,0.7,1.9,0.3
                  c0.6-0.4,0.7-1.3,0.3-1.9l-3.8-5.6l7.7-11.2C25.1,41.2,25,40.3,24.4,39.9z"
              fill="currentColor"
            />
            <path
              d="M27.3,68.7c-0.6-0.4-1.5-0.3-1.9,0.3l-3.5,5.1c-0.3,0.5-0.3,1.1,0,1.6l4.2,6.1c0.4,0.6,1.3,0.7,1.9,0.3
                  c0.6-0.4,0.7-1.3,0.3-1.9l-3.6-5.2l2.9-4.2C28,69.9,27.9,69.1,27.3,68.7z"
              fill="currentColor"
            />
            <path
              d="M40.2,73.2c-0.6-0.4-1.5-0.3-1.9,0.3l-4.5,6.5c-0.3,0.5-0.3,1.1,0,1.6l2.2,3.2c0.4,0.6,1.3,0.7,1.9,0.3
                  c0.6-0.4,0.7-1.3,0.3-1.9l-1.6-2.3l3.9-5.7C40.9,74.5,40.8,73.6,40.2,73.2z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Enhanced key information section with floating card effect */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-10 relative z-30 -mt-40">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-gray-100 dark:border-gray-700 transform transition-all duration-500 hover:shadow-blue-100 dark:hover:shadow-blue-900/20">
          {/* Quick Tax Calculator Promo with animated elements */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 pb-12 border-b border-gray-200 dark:border-gray-700">
            <div className="md:w-2/3 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-2 text-blue-600 dark:text-blue-400 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
                <span className="text-sm font-medium">Tax Calculator</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white animate-slide-up">
                Calculate Your{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Estimated Tax Return
                </span>
              </h2>

              <p className="text-gray-600 dark:text-gray-300 text-lg animate-fade-in-delayed">
                Use our simple tax calculator to estimate your STO tax refund in
                just a few minutes. Fast, accurate, and secure.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-7 py-4 rounded-xl font-medium transition-all 
                  shadow-lg hover:shadow-blue-500/30 flex items-center gap-3 animate-fade-in"
                >
                  <div className="relative">
                    <Calculator className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping"></span>
                  </div>
                  Start Calculation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  className="group bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white 
                  border-2 border-gray-300 dark:border-gray-600 px-7 py-4 rounded-xl font-medium transition-all flex items-center gap-3 animate-fade-in-delayed"
                >
                  <div className="relative">
                    <Calendar className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-ping-slow"></span>
                  </div>
                  Key Tax Dates
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="md:w-1/3 flex justify-center animate-float">
              <div className="relative h-56 w-56">
                {/* Animated circles */}
                <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full animate-pulse-slow"></div>
                <div
                  className="absolute inset-4 bg-blue-600/20 dark:bg-blue-600/30 rounded-full animate-pulse-slow"
                  style={{ animationDelay: "300ms" }}
                ></div>
                <div
                  className="absolute inset-8 bg-blue-700/30 dark:bg-blue-700/40 rounded-full animate-pulse-slow"
                  style={{ animationDelay: "600ms" }}
                ></div>

                {/* Animated dollar sign */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <DollarSign className="h-24 w-24 text-blue-600 dark:text-blue-400 animate-bounce-slow" />

                    {/* Small floating dollar signs */}
                    <div
                      className="absolute -top-6 -right-6 text-blue-500 dark:text-blue-300 animate-float-delayed"
                      style={{ animationDelay: "200ms" }}
                    >
                      <DollarSign className="h-8 w-8" />
                    </div>
                    <div
                      className="absolute -bottom-4 -left-4 text-blue-500 dark:text-blue-300 animate-float"
                      style={{ animationDelay: "400ms" }}
                    >
                      <DollarSign className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid with animated hover effects */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8 animate-slide-up">
              <div className="h-1 w-10 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Our Tax Services
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {taxServices.map((service, index) => {
                const colorMap = {
                  blue: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400",
                  green:
                    "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400",
                  purple:
                    "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400",
                  orange:
                    "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400",
                };

                return (
                  <div
                    key={index}
                    className="group bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-600 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`${
                        colorMap[service.color]
                      } rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                    >
                      {service.icon}
                    </div>
                    <h4 className="font-bold text-xl mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>

                    {/* Animated arrow on hover */}
                    <div className="mt-4 overflow-hidden h-6">
                      <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 transform translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Tax Dates with animated calendar icons */}
          <div>
            <div className="flex items-center gap-3 mb-8 animate-slide-up">
              <div className="h-1 w-10 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Smart Tax Dates
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {taxDates.map((item, index) => (
                <div
                  key={index}
                  className="group border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative flex-shrink-0 w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                      <Calendar className="w-7 h-7 text-blue-600 dark:text-blue-400" />

                      {/* Animated clock hand */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-1 h-5 bg-transparent origin-bottom rotate-0 group-hover:rotate-[360deg] transition-transform duration-3000">
                          <div className="w-1 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.date}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated floating notification */}
      <div className="fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 flex items-center gap-3 border border-gray-200 dark:border-gray-700 animate-slide-in-right">
        <div className="relative flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
          <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
        </div>
        <div>
          <p className="font-medium text-gray-900 dark:text-white text-sm">
            Tax Deadline Approaching
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-xs">
            31 October - Individual returns due
          </p>
        </div>
      </div>

      <Services />
      <About />
      <Contact />
      <STO />

      {/* Add CSS animations */}
      <style>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-up-delayed {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          30% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-delayed {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-10px) rotate(10deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes slow-zoom {
          0%,
          100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes slide-in-right {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.7s ease-out forwards;
        }

        .animate-slide-up-delayed {
          animation: slide-up-delayed 1.2s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.7s ease-out forwards;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.5s ease-out forwards;
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
