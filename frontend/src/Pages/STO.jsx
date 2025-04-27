import {
  FaSpinner,
  FaFileInvoiceDollar,
  FaComments,
  FaUsers,
  FaQuestionCircle,
  FaArrowRight,
} from "react-icons/fa";

const STOData = [
  {
    name: "Buying a house",
    image: "src/assets/profile1.webp",
    description:
      "Hi, my wife and I wish to buy a house together. I am an Sri Lankan citizen, and my wife is Indonesian with a 820 temporary visa waiting for a permanent visa to be approved.",
    aosDelay: "0",
    icon: <FaUsers className="text-blue-500" />,
  },
  {
    name: "Business Activity Statement 003",
    image: "src/assets/profile2.webp",
    description:
      "Am I prepaying payable tax on rental investment income for this financial year? And am I receiving this because I'm on a payment plan for last year's tax owing?",
    aosDelay: "300",
    icon: <FaFileInvoiceDollar className="text-blue-500" />,
  },
  {
    name: "Trustee Voluntary Payment (TVP) to ATO",
    image: "src/assets/profile3.avif",
    description:
      "Hi, I believe Colonial has made a trustee voluntary payment (TVP) to the Sri Lankan Taxation Office on my behalf as a result of the Colonial First State Fees Class Action.",
    aosDelay: "1000",
    icon: <FaQuestionCircle className="text-blue-500" />,
  },
];

const STO = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-gray-900 dark:text-white py-14 sm:pb-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 -mt-6">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="space-y-4 pb-12 text-center ">
            <div
              data-aos="fade-up"
              className="flex items-center justify-center gap-3 mb-2"
            >
              <div className="relative">
                <FaFileInvoiceDollar className="text-blue-600 text-4xl" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
              </div>
              <h2 className="text-3xl font-bold text-blue-600 sm:text-4xl font-serif">
                Welcome to the STO's Online Community
              </h2>
            </div>
            <p
              data-aos="fade-up"
              className="sm:px-60 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Join the conversation and find answers to your tax and super
              questions. Our community is here to help you navigate your tax
              journey.
            </p>

            <div
              className="flex justify-center mt-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center gap-4 bg-blue-100 dark:bg-blue-900/30 px-6 py-3 rounded-full">
                <FaComments className="text-blue-500 animate-pulse" />
                <span className="text-blue-700 dark:text-blue-300 font-medium">
                  Active discussions happening now
                </span>
                <FaSpinner className="text-blue-500 animate-spin" />
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {STOData.map((item, index) => (
              <div
                key={item.name}
                data-aos="fade-up"
                data-aos-delay={item.aosDelay}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-blue-500 hover:translate-y-[-5px] group"
              >
                <div className="flex justify-center mb-6 relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="rounded-full w-24 h-24 border-4 border-blue-500 shadow-md group-hover:border-blue-600 transition-all duration-300 object-cover"
                  />
                  <div className="absolute -bottom-3 right-1/2 transform translate-x-1/2 bg-blue-500 p-2 rounded-full group-hover:bg-blue-600 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-gray-700/50 p-4 rounded-lg mb-4">
                  <p className="text-gray-800 dark:text-gray-200 italic">
                    "{item.description}"
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {item.name}
                  </p>
                  <button className="text-blue-500 hover:text-blue-700 transition-colors duration-300 flex items-center gap-1 text-sm">
                    View discussion
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center" data-aos="fade-up">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
              Join the Community
              <FaUsers className="animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default STO;
