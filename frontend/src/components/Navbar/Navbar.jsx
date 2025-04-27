import { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import {
  FaSearch,
  FaUserCircle,
  FaMoneyBillWave,
  FaChartLine,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import {
  TbCalculator,
  TbFileInvoice,
  TbPigMoney,
  TbReceipt,
  TbCoin,
  TbMoneybag,
} from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

export const Navlinks = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "PAYMENT", link: "/#payment" },
  { id: 3, name: "FAQ", link: "/#faq" },
  { id: 4, name: "ABOUT US", link: "/about" },
  { id: 5, name: "SERVICES", link: "/Services" },
];

const searchNavigationItems = [
  { id: "why-choose", name: "Why Choose Our Services", link: "/Services" },
  { id: "about-tax", name: "About Our Tax Services", link: "/about" },
  {
    id: "tax-calculator",
    name: "Calculate Your Estimated Tax Return",
    link: "/#tax-calculator",
  },
  { id: "tax-dates", name: "Smart Tax Dates", link: "/#" },
  {
    id: "community",
    name: "Welcome to the STO's Online Community",
    link: "/STO",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [activeTaxTip, setActiveTaxTip] = useState(0);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  const taxTips = [
    {
      icon: (
        <motion.div
          animate={{
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <TbCalculator className="text-2xl" />
        </motion.div>
      ),
      title: "Tax Calculator",
      description: "Estimate your tax liability with our free calculator",
    },
    {
      icon: (
        <motion.div
          animate={{
            y: [0, -5, 0, -5, 0],
            opacity: [1, 0.8, 1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <TbFileInvoice className="text-2xl" />
        </motion.div>
      ),
      title: "Filing Deadline",
      description: "Don't miss important tax deadlines - April 15th",
    },
    {
      icon: (
        <motion.div
          animate={{
            scale: [1, 1.2, 1, 1.2, 1],
            rotate: [0, 0, 0, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <TbPigMoney className="text-2xl" />
        </motion.div>
      ),
      title: "Tax Savings",
      description: "Discover deductions to maximize your refund",
    },
    {
      icon: (
        <motion.div
          animate={{
            rotate: [0, 0, 10, -10, 0],
            x: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <FaMoneyBillWave className="text-2xl" />
        </motion.div>
      ),
      title: "Refund Status",
      description: "Check the status of your tax refund instantly",
    },
    {
      icon: (
        <motion.div
          animate={{
            y: [0, -3, 3, -3, 0],
            x: [0, 3, -3, 3, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <TbReceipt className="text-2xl" />
        </motion.div>
      ),
      title: "Receipt Tracker",
      description: "Organize your tax deductible expenses easily",
    },
    {
      icon: (
        <motion.div
          animate={{
            scale: [1, 1.1, 1, 1.1, 1],
            y: [0, -2, 0, -2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <FaChartLine className="text-2xl" />
        </motion.div>
      ),
      title: "Tax Planning",
      description: "Strategic tax planning for your financial future",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      setActiveTaxTip((prev) => (prev + 1) % taxTips.length);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [taxTips.length]);

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() !== "") {
      const results = searchNavigationItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  };

  const handleSearchItemClick = (link) => {
    setShowSearchResults(false);

    window.location.href = link;
  };

  const handleSearchFocus = () => {
    if (searchQuery.trim() !== "") {
      setShowSearchResults(true);
    }
  };

  const handleSearchBlur = () => {
    setTimeout(() => {
      setShowSearchResults(false);
    }, 200);
  };

  const handleSearchResultsKeydown = (e, index) => {
    if (e.key === "Enter") {
      handleSearchItemClick(filteredResults[index].link);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".search-container")) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const FloatingCoins = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * 100 - 50 + "%",
              y: "120%",
              rotate: Math.random() * 360,
              opacity: 0.7,
            }}
            animate={{
              y: "-120%",
              rotate: Math.random() * 720,
              opacity: [0.7, 0.9, 0.7, 0.5, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 2,
              ease: "linear",
            }}
          >
            {i % 2 === 0 ? (
              <TbCoin className="text-yellow-400 text-xl" />
            ) : (
              <TbMoneybag className="text-green-400 text-xl" />
            )}
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Tax Tip Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white overflow-hidden relative">
        <FloatingCoins />
        <div className="container mx-auto px-6 lg:px-16 py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTaxTip}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 text-sm md:text-base"
            >
              {taxTips[activeTaxTip].icon}
              <motion.span
                className="font-medium"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                {taxTips[activeTaxTip].title}:
              </motion.span>
              <span>{taxTips[activeTaxTip].description}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 py-5 flex justify-between items-center">
        <motion.div
          className="font-serif text-4xl md:text-5xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            animate={{
              color: ["#3B82F6", "#60A5FA", "#3B82F6"],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            style={{ display: "inline-block" }}
          >
            Smart
          </motion.span>{" "}
          <motion.span
            animate={{
              color: ["#2563EB", "#1E40AF", "#2563EB"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: 1,
            }}
            style={{ display: "inline-block" }}
          >
            Tax
          </motion.span>
          <motion.i
            className="fa-sharp fa-thin fa-copyright text-sm ml-2"
            style={{ color: "#ffffff" }}
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          ></motion.i>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-lg font-medium">
            {Navlinks.map(({ id, name, link }) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: id * 0.1 }}
              >
                <a href={link} className="relative group overflow-hidden">
                  <span
                    className={`${
                      scrolled
                        ? "text-gray-800 dark:text-gray-200"
                        : "text-gray-800 dark:text-white"
                    } transition-colors duration-300`}
                  >
                    {name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Search Bar & User Actions */}
        <div className="hidden md:flex items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative search-container"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              placeholder="Search..."
              className="p-2 pl-10 w-64 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-400 dark:bg-gray-800/70 dark:border-gray-700 transition-all duration-300"
            />
            <motion.div
              animate={{ x: [0, 3, -3, 3, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="absolute left-3 top-3"
            >
              <FaSearch className="text-gray-400 dark:text-gray-300" />
            </motion.div>

            {/* Search Results Dropdown */}
            {showSearchResults && filteredResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 overflow-hidden"
              >
                {filteredResults.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-0"
                    onClick={() => handleSearchItemClick(item.link)}
                    onKeyDown={(e) => handleSearchResultsKeydown(e, index)}
                    tabIndex={0}
                  >
                    <FaSearch className="text-blue-500 dark:text-blue-400 mr-3 text-sm" />
                    <span className="text-gray-800 dark:text-gray-200">
                      {item.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.1, 1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <FaUserCircle className="text-xl" />
              </motion.div>
              <a href="/login">Sign In</a>
            </motion.button>
            {/* Dark Mode Toggle */}
            <motion.div
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full cursor-pointer"
            >
              {theme === "dark" ? (
                <motion.div
                  animate={{
                    rotate: [0, 180],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <BiSolidSun
                    onClick={() => setTheme("light")}
                    className="text-2xl text-yellow-500"
                  />
                </motion.div>
              ) : (
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <BiSolidMoon
                    onClick={() => setTheme("dark")}
                    className="text-2xl text-blue-600"
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu & Dark Mode */}
        <div className="md:hidden flex items-center gap-4">
          <motion.div
            whileHover={{ rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full cursor-pointer"
          >
            {theme === "dark" ? (
              <motion.div
                animate={{
                  rotate: [0, 180],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-xl text-yellow-500"
                />
              </motion.div>
            ) : (
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-xl text-blue-600"
                />
              </motion.div>
            )}
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full cursor-pointer"
          >
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="text-2xl text-gray-800 dark:text-white"
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="text-2xl text-gray-800 dark:text-white"
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <ResponsiveMenu
        showMenu={showMenu}
        navLinks={Navlinks}
        searchNavigationItems={searchNavigationItems}
      />
    </header>
  );
};

const ResponsiveMenu = ({ showMenu, navLinks, searchNavigationItems }) => {
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");
  const [showMobileResults, setShowMobileResults] = useState(false);
  const [filteredMobileResults, setFilteredMobileResults] = useState([]);

  const handleMobileSearchChange = (e) => {
    const query = e.target.value;
    setMobileSearchQuery(query);

    if (query.trim() !== "") {
      const results = searchNavigationItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMobileResults(results);
      setShowMobileResults(true);
    } else {
      setShowMobileResults(false);
    }
  };

  const handleMobileSearchItemClick = (link) => {
    setShowMobileResults(false);
    window.location.href = link;
  };

  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="container mx-auto px-6 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ id, name, link }) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: id * 0.1 }}
                >
                  <a
                    href={link}
                    className="block text-lg font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {name}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Search */}
            <div className="mt-6 relative search-container">
              <input
                type="text"
                value={mobileSearchQuery}
                onChange={handleMobileSearchChange}
                placeholder="Search..."
                className="w-full p-2 pl-10 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700"
              />
              <motion.div
                animate={{ x: [0, 3, -3, 3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="absolute left-3 top-3"
              >
                <FaSearch className="text-gray-400 dark:text-gray-300" />
              </motion.div>

              {/* Mobile Search Results */}
              {showMobileResults && filteredMobileResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 overflow-hidden"
                >
                  {filteredMobileResults.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-0"
                      onClick={() => handleMobileSearchItemClick(item.link)}
                    >
                      <FaSearch className="text-blue-500 dark:text-blue-400 mr-3 text-sm" />
                      <span className="text-gray-800 dark:text-gray-200">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 w-full justify-center"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.1, 1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <FaUserCircle className="text-xl" />
              </motion.div>
              <a href="/login" className="w-full text-center">
                Sign In
              </a>
            </motion.button>

            {/* Tax Services Quick Links */}
            <div className="mt-6 border-t pt-4 dark:border-gray-700">
              <h3 className="font-medium text-lg mb-3 text-gray-800 dark:text-white">
                Tax Services
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <motion.a
                  href="/#tax-calculator"
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <TbCalculator className="text-blue-500 dark:text-blue-400" />
                  </motion.div>
                  <span className="text-sm">Tax Calculator</span>
                </motion.a>

                <motion.a
                  href="/#tax-filing"
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg"
                >
                  <motion.div
                    animate={{
                      y: [0, -3, 0, -3, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <FaFileInvoiceDollar className="text-green-500 dark:text-green-400" />
                  </motion.div>
                  <span className="text-sm">File Taxes</span>
                </motion.a>

                <motion.a
                  href="/#refund-status"
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <FaMoneyBillWave className="text-yellow-500 dark:text-yellow-400" />
                  </motion.div>
                  <span className="text-sm">Refund Status</span>
                </motion.a>

                <motion.a
                  href="/#tax-planning"
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2 p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <FaChartLine className="text-purple-500 dark:text-purple-400" />
                  </motion.div>
                  <span className="text-sm">Tax Planning</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
