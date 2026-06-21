import { motion, type Variants } from "framer-motion";

const OurJourney = () => {
  // Fade-in animation variants for premium entrance feel
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
    <section className="bg-[#F0F6FF] text-[#191A15] overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-24 lg:py-28"
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
          Our Journey
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-7xl font-normal mt-4 mb-8 leading-tight tracking-tight text-gray-900"
          variants={itemVariants}
        >
          From incubation to independence <br className="hidden sm:inline" /> independence.
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          className="text-base sm:text-lg lg:text-[1.125rem] text-gray-800 leading-relaxed max-w-4xl mb-12 font-normal"
          variants={itemVariants}
        >
          Originally incubated as an internal division within GFA Technologies (formerly GetFundedAfrica), Remsana was spun off into an independent entity in 2025 to focus entirely on scaling business infrastructure across the African continent
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-12 max-w-4xl"
          variants={itemVariants}
        >
          {/* Card 1 */}
          <motion.div
            className="bg-[#CDE0FF] rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[160px] sm:min-h-[190px] transition-transform duration-300 hover:scale-[1.02]"
            whileHover={{ y: -4 }}
          >
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0053D0] mb-4 tracking-tight">
              400,000+
            </h3>
            <p className="text-sm sm:text-base lg:text-[1.05rem] text-gray-800 font-medium leading-snug">
              Businesses supported across West Africa
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-[#CDE0FF] rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[160px] sm:min-h-[190px] transition-transform duration-300 hover:scale-[1.02]"
            whileHover={{ y: -4 }}
          >
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0053D0] mb-4 tracking-tight">
              2025
            </h3>
            <p className="text-sm sm:text-base lg:text-[1.05rem] text-gray-800 font-medium leading-snug">
              Year of independence as a standalone entity
            </p>
          </motion.div>
        </motion.div>

        {/* Paragraph 2 */}
        <motion.p
          className="text-base sm:text-lg lg:text-[1.125rem] text-gray-800 leading-relaxed max-w-4xl font-normal"
          variants={itemVariants}
        >
          Backed by an inherited pipeline from the broader GFA Technologies ecosystem, we are proudly cementing our position as Nigeria’s number one business operating system and digital support company.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default OurJourney;
