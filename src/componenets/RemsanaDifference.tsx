import { motion, type Variants } from "framer-motion";
import QuoteIcon from "../assets/qoute.svg";

const RemsanaDifference = () => {
  // Fade-in animations matching the OurJourney component for visual consistency
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#F0F6FF] text-[#191A15] overflow-hidden pb-16 sm:pb-24 lg:pb-32">
      <motion.div
        className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Label */}
        <motion.p
          className="text-sm sm:text-base font-normal text-gray-600 tracking-wide"
          variants={itemVariants}
        >
          The Remsana Difference
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-7xl font-normal mt-4 mb-10 sm:mb-16 leading-tight tracking-tight text-gray-900"
          variants={itemVariants}
        >
          A lifelong partnership in growth, not a <br className="hidden sm:inline" />one time course.
        </motion.h2>

        {/* Content columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start"
          variants={itemVariants}
        >
          {/* Left Column (Text paragraphs) */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <p className="text-base sm:text-lg lg:text-[1.125rem] text-gray-800 leading-relaxed font-normal">
              Unlike traditional universities and training institutions, our relationship with our learners and business owners doesn’t end when a program finishes. For us, that is just the beginning of a lifelong partnership in growth.
            </p>
            <p className="text-base sm:text-lg lg:text-[1.125rem] text-gray-800 leading-relaxed font-normal">
              We combine cutting-edge technology automation with structural corporate compliance to eliminate operational leakages, track predictive financials, and build sustainable systems that outlive their founders.
            </p>
          </div>

          {/* Right Column (Quote card) */}
          <motion.div
            className="bg-[#CDE0FF] rounded-3xl p-8 lg:p-10 flex gap-5 items-start transition-transform duration-300 hover:scale-[1.02]"
            whileHover={{ y: -4 }}
          >
            {/* Quote SVG Icon */}
            <img
              src={QuoteIcon}
              alt="Quote Icon"
              className="w-10 sm:w-12 lg:w-14 h-auto shrink-0 opacity-90 mt-1"
            />
            {/* Quote Text */}
            <p className="text-base sm:text-lg lg:text-[1.125rem] text-gray-800 font-medium leading-relaxed">
              We aren’t just building software; we are building the economic infrastructure for the future of African commerce.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RemsanaDifference;
