import { motion, AnimatePresence } from "framer-motion";

interface ResultModalProps {
  isOpen: boolean;
  status: "success" | "error";
  message: string;
  onClose: () => void;
  bookingUrl?: string;
}

const ResultModal = ({
  isOpen,
  status,
  message,
  onClose,
  
}: ResultModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="result-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-[#020A15]/80 backdrop-blur-sm" />

          <motion.div
            key="result-modal-panel"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-3xl overflow-hidden p-8 text-center"
            style={{
              background:
                "linear-gradient(135deg, #020A15 0%, #0053D0 50%, #020A15 100%)",
            }}
          >
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
              }}
              className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 ${
                status === "success"
                  ? "bg-green-500/15 border border-green-500/30"
                  : "bg-red-500/15 border border-red-500/30"
              }`}
            >
              {status === "success" ? (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f87171"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              )}
            </motion.div>

            <h3 className="text-2xl text-white font-medium mb-2">
              {status === "success" ? "Success!" : "Notice"}
            </h3>
            <p className="text-gray-300 text-sm mb-8 leading-relaxed">
              {message}
            </p>

            {/* <div className="space-y-3">
              {status === "success" && bookingUrl && (
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-full transition-colors"
                >
                  Book Your Strategy Session
                </motion.a>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose}
                className={`w-full font-medium py-3 rounded-full transition-colors ${
                  status === "success"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-red-600 hover:bg-red-700 text-white"
                }`}
              >
                Close
              </motion.button>
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResultModal;
