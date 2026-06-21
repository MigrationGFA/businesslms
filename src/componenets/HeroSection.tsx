import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState, useEffect } from "react";
import Professional from "../assets/Professional.webp";
import Navbar from "../componenets/Navbar";
import Line from "../assets/VectorImage.svg";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = Professional;
    img.onload = () => setImageLoaded(true);
    // In case it's already cached and fires before listener attaches
    if (img.complete) setImageLoaded(true);
  }, []);

  const badgeVariants : Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const headingVariants : Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15, ease: "easeOut" } },
  };

  const descriptionVariants : Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
  };

  const buttonsVariants : Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.45, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-14 pb-20 md:pb-0">
      {/* Background image, fades in once loaded */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center md:bg-down"
        style={{ backgroundImage: `url(${Professional})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Fallback solid color underneath, so there's no flash of white before the image fades in */}
      <div className="absolute inset-0 bg-[#0B1830] -z-10" />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(0deg,rgba(0,27,68,0.85)_0%,rgba(0,27,68,0.70)_50%,rgba(0,27,68,0.3)_100%)]"
      />

      <div className="relative z-20">
        <Navbar />
      </div>

      <img src={Line} alt="" aria-hidden="true" className="absolute top-16 left-0 w-full" />

      {/* Content - only animates once the image has loaded */}
      <AnimatePresence>
        {imageLoaded && (
          <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center pt-8">
            <motion.div
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              className="mb-8 inline-block"
            >
              <div className="border-2 border-white text-white px-4 py-2 rounded-full text-sm font-medium">
                Remsana Academy powered by GFA Technologies
              </div>
            </motion.div>

            <motion.h1
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl lg:px-40 md:text-3xl lg:text-6xl font-medium text-white mb-6 mt-20"
            >
              Build an{" "}
              <span className="bg-blue-600 text-white">AI-Powered Business</span>{" "}
              That Runs Without You.
            </motion.h1>

            <motion.p
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              className="text-sm md:text-lg text-gray-200 mb-8 max-w-2xl"
            >
              A 100-day executive learning program equipping Founders, CEOs, and
              Business Owners to strategically deploy AI across operations, finance,
              and marketing.
            </motion.p>

            <motion.div
              variants={buttonsVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
              >
                Apply for a seat →
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition"
              >
                Download Brochure
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;