import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState, useEffect } from "react";
import AboutBg from "../assets/aboutimage.webp";
import Navbar from "./Navbar";

interface AboutHeroProps {
  onOpenApplicationModal: () => void;
}

const AboutHero = ({ onOpenApplicationModal }: AboutHeroProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = AboutBg;
    img.onload = () => setImageLoaded(true);
    if (img.complete) setImageLoaded(true);
  }, []);

  const badgeVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15, ease: "easeOut" } },
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[80vh] lg:min-h-screen overflow-hidden pt-10 pb-20 md:pb-28 flex flex-col justify-between">
      {/* Background image, fades in once loaded */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${AboutBg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Fallback solid color and dark overlay to ensure readability */}
      <div className="absolute inset-0 bg-[#0B1830] -z-10" />

      {/* Overlay gradient - fades from transparent at top to deep navy blue #0B1830 at bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(180deg,rgba(11,24,48,0.45)_0%,rgba(11,24,48,0.75)_50%,#0B1830_100%)]"
      />

      {/* Navbar overlay */}
      <div className="relative z-20">
        <Navbar onOpenApplicationModal={onOpenApplicationModal} />
      </div>

      {/* Content - only animates once image loads */}
      <AnimatePresence>
        {imageLoaded && (
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 w-full flex-grow flex flex-col justify-center pt-16 md:pt-24 lg:pt-32">
            <div className="max-w-5xl text-left">
              {/* Badge "About Us" */}
              <motion.div
                variants={badgeVariants}
                initial="hidden"
                animate="visible"
                className="mb-8 inline-block"
              >
                <div className="border border-white/30 text-white px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase bg-white/5 backdrop-blur-sm">
                  About Us
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={headingVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-[1.1] tracking-tight"
              >
                Nigeria’s #1 Business Operating System Built on Institutional Trust
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={descriptionVariants}
                initial="hidden"
                animate="visible"
                className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl font-light"
              >
                Originally incubated within GFA Technologies Group, Remsana is an all-in-one, mobile-first business support engine powering operations for various types of businesses.
              </motion.p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutHero;
