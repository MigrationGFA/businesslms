import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Logo from "../assets/RemsanaLogoBlue.webp";
import { Link } from "react-router-dom";

interface NavbarProps {
  onOpenApplicationModal: () => void;
}

const Navbar = ({ onOpenApplicationModal }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Program", href: "/#program", isRoute: false },
    { label: "Contact", href: "/#contact", isRoute: false },
    { label: "About Us", href: "/about", isRoute: true },
  ];

  return (
    <div className="relative max-w-7xl  w-full   md:w-4xl mx-auto px-4 sm:px-6  ">
      <div className="bg-white py-2 px-4 rounded-full z-20 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-5xl shrink-0"
          >
            <Link to="/">
              <img src={Logo} alt="Remsana Logo" className="h-7 sm:h-8" />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            {navItems.map((item, index) =>
              item.isRoute ? (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Link
                    to={item.href}
                    className="text-black text-sm hover:text-blue-600 transition whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-black text-sm hover:text-blue-600 transition whitespace-nowrap"
                >
                  {item.label}
                </motion.a>
              ),
            )}
          </div>

          {/* Desktop CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenApplicationModal}
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 shrink-0"
          >
            Apply Now →
          </motion.button>

          {/* Mobile Toggle */}
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-gray-700 rounded-full" />
            <span className="w-6 h-0.5 bg-gray-700 rounded-full" />
            <span className="w-6 h-0.5 bg-gray-700 rounded-full" />
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
            className="md:hidden absolute left-0 right-0 mt-3 bg-white rounded-3xl shadow-lg p-6 z-50"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item, index) =>
                item.isRoute ? (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-black text-sm hover:text-blue-600 transition whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="text-black text-sm hover:text-blue-600 transition whitespace-nowrap"
                  >
                    {item.label}
                  </motion.a>
                ),
              )}

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsOpen(false);
                  onOpenApplicationModal();
                }}
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
