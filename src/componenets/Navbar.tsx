
import { motion } from "framer-motion";

const Navbar = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col">
      <motion.div
        className="flex-1 flex items-center justify-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-2xl">
          {/* Animated Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-white mb-6"
          >
            Under Construction
          </motion.h1>

          {/* Animated Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-blue-100 mb-8"
          >
            We're working on something amazing!
          </motion.p>

          {/* Animated Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-blue-50 mb-12 leading-relaxed"
          >
            Our platform is being redesigned to bring you an even better learning experience. Check back soon!
          </motion.p>

          {/* Animated Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Notify Me
          </motion.button>

          {/* Animated Floating Elements */}
          <div className="mt-16 flex justify-center gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="w-12 h-12 bg-white bg-opacity-20 rounded-full"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;