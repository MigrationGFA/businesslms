import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import axios from "axios";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BrochureModal = ({ isOpen, onClose }: BrochureModalProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    console.log("Submitting brochure request for email:", email);
    try {
      const endpoint = import.meta.env.VITE_BROCHURE_ENDPOINT;
      const payload = { email };
      console.log("Sending payload to endpoint:", endpoint, payload);
      const response = await axios.post(endpoint, payload, { 
        headers: { "Content-Type": "application/json" } 
      });
      console.log("Brochure response:", response.data);
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Error submitting brochure request:", error);
      setStatus("error");
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after the exit animation finishes
    setTimeout(() => {
      setStatus("idle");
      setEmail("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="brochure-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Blurred dark overlay */}
          <div className="absolute inset-0 bg-[#020A15]/80 backdrop-blur-sm" />

          {/* Modal panel */}
          <motion.div
            key="brochure-modal-panel"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #020A15 0%, #0053D0 50%, #020A15 100%)",
            }}
          >
            {/* Subtle border ring */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

            <div className="relative p-8">
              {/* Close button */}
              <button
                id="brochure-modal-close"
                onClick={handleClose}
                aria-label="Close brochure modal"
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

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/70">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                Program Brochure
              </div>

              <AnimatePresence mode="wait">
                {status !== "success" ? (
                  <motion.div
                    key="form-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-2xl sm:text-3xl text-white font-medium leading-snug mb-2">
                      Get the{" "}
                      <span className="italic text-blue-400">full program</span> details.
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed mb-8">
                      Enter your email and we'll send the Remsana Academy brochure straight to your inbox.
                    </p>

                    <form id="brochure-form" onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="brochure-email"
                          className="block text-sm text-white/80 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          id="brochure-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="w-full rounded-full px-5 py-3 text-sm text-[#191A15] placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                      </div>

                      <motion.button
                        id="brochure-submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 rounded-full transition-colors"
                      >
                        {status === "submitting" ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              className="animate-spin w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                            </svg>
                            Sending…
                          </span>
                        ) : (
                          "Send me the Brochure →"
                        )}
                      </motion.button>

                      <AnimatePresence>
                        {status === "error" && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="text-red-400 text-sm text-center"
                          >
                            Something went wrong. Please try again.
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </form>
                  </motion.div>
                ) : (
                  /* ── Success state ── */
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-center py-4"
                  >
                    {/* Animated checkmark ring */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-5"
                    >
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
                    </motion.div>

                    <h3 className="text-2xl text-white font-medium mb-2">Brochure on its way!</h3>
                    <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                      Check your inbox — the Remsana Academy program brochure has been sent to your email.
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleClose}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-3 rounded-full transition-colors"
                    >
                      Done
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrochureModal;
