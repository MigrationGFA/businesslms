import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Logo from "../assets/RemsanaLogoBlue.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Program", "Contact", "About Us"];

  return (
    <div className="relative max-w-7xl w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-white py-2 px-4 rounded-full z-20 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-5xl shrink-0"
          >
            <img src={Logo} alt="Remsana Logo" className="h-7 sm:h-8" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-black text-sm hover:text-blue-600 transition whitespace-nowrap"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 shrink-0"
          >
            Apply Now →
          </motion.button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 6 : 0,
              }}
              className="absolute w-6 h-0.5 bg-gray-700"
            />
            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              className="absolute w-6 h-0.5 bg-gray-700"
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -6 : 0,
              }}
              className="absolute w-6 h-0.5 bg-gray-700"
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute left-0 right-0 mt-3 bg-white rounded-3xl shadow-lg p-6 z-10"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 font-medium hover:text-blue-600 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 w-full"
              >
                Apply Now →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;