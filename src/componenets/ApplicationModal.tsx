import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import axios from "axios";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationModal = ({ isOpen, onClose }: ApplicationModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyEmail: "",
    companyName: "",
    jobTitle: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setResponseMessage("");
    try {
      const endpoint = import.meta.env.VITE_APPLICATION_FORM_ENDPOINT;
      const payload = {
        full_name: formData.fullName,
        email: formData.companyEmail,
        company_name: formData.companyName,
        job_title: formData.jobTitle
      };

      const response = await axios.post(endpoint, payload, {
        headers: { "Content-Type": "application/json" },
      });
      const data = response.data;
      const msg = typeof data === 'string' ? data : (data?.messages?.success || data?.message || "Application submitted successfully!");
      setResponseMessage(msg);
      setStatus("success");
      setFormData({ fullName: "", companyEmail: "", companyName: "", jobTitle: "" });
    } catch (error: any) {
      const data = error.response?.data;
      const msg = typeof data === 'string' 
        ? data 
        : (data?.messages?.error || data?.messages?.message || data?.message || data?.error || "Something went wrong. Please try again.");
      setResponseMessage(msg);
      setStatus("error");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStatus("idle");
      setResponseMessage("");
      setFormData({ fullName: "", companyEmail: "", companyName: "", jobTitle: "" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="application-modal-backdrop"
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
            key="application-modal-panel"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #020A15 0%, #0053D0 50%, #020A15 100%)",
            }}
          >
            {/* Subtle border ring */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

            <div className="relative p-8">
              {/* Close button */}
              <button
                id="application-modal-close"
                onClick={handleClose}
                aria-label="Close application modal"
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
              <div className="mb-5 inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/70">
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
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
                Executive Cohort · 150 seats only
              </div>

              <AnimatePresence mode="wait">
                {status === "idle" || status === "submitting" ? (
                  <motion.div
                    key="app-form-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-2xl sm:text-3xl text-white font-medium leading-snug mb-2">
                      Apply for a{" "}
                      <span className="italic text-blue-400">seat.</span>
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      Join an elite cohort of founders and business owners for the
                      next 100-day transformation program.
                    </p>

                    <form
                      id="application-form"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="app-fullName"
                            className="block text-sm text-white/80 mb-2"
                          >
                            Full Name
                          </label>
                          <input
                            id="app-fullName"
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={handleChange("fullName")}
                            placeholder="Emmanuel Kelvin"
                            className="w-full rounded-full px-4 py-3 text-sm text-[#191A15] placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="app-jobTitle"
                            className="block text-sm text-white/80 mb-2"
                          >
                            Job Title
                          </label>
                          <input
                            id="app-jobTitle"
                            type="text"
                            required
                            value={formData.jobTitle}
                            onChange={handleChange("jobTitle")}
                            placeholder="Chief Executive Officer"
                            className="w-full rounded-full px-4 py-3 text-sm text-[#191A15] placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="app-companyEmail"
                          className="block text-sm text-white/80 mb-2"
                        >
                          Company Email
                        </label>
                        <input
                          id="app-companyEmail"
                          type="email"
                          required
                          value={formData.companyEmail}
                          onChange={handleChange("companyEmail")}
                          placeholder="emmanuel@company.com"
                          className="w-full rounded-full px-4 py-3 text-sm text-[#191A15] placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="app-companyName"
                          className="block text-sm text-white/80 mb-2"
                        >
                          Company Name
                        </label>
                        <input
                          id="app-companyName"
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={handleChange("companyName")}
                          placeholder="Acme Holdings"
                          className="w-full rounded-full px-4 py-3 text-sm text-[#191A15] placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                      </div>

                      <motion.button
                        id="application-submit"
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
                            Submitting…
                          </span>
                        ) : (
                          "Submit Application →"
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  /* ── Result state (Success/Error) ── */
                  <motion.div
                    key="app-result-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-center py-4"
                  >
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
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      )}
                    </motion.div>

                    <h3 className="text-2xl text-white font-medium mb-2">
                      {status === "success" ? "Success!" : "Notice"}
                    </h3>
                    <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                      {responseMessage}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleClose}
                      className={`font-medium px-10 py-3 rounded-full transition-colors ${
                        status === "success" 
                          ? "bg-blue-600 hover:bg-blue-700 text-white" 
                          : "bg-red-600 hover:bg-red-700 text-white"
                      }`}
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

export default ApplicationModal;
