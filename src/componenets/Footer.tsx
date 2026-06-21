import { useState, } from "react";
import axios from "axios";

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyEmail: "",
    companyName: "",
    jobTitle: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const endpoint = import.meta.env.VITE_APPLICATION_FORM_ENDPOINT;

      await axios.post(endpoint, formData, {
        headers: { "Content-Type": "application/json" },
      });

      setStatus("success");
      setFormData({ fullName: "", companyEmail: "", companyName: "", jobTitle: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <>
      <section
        className="relative overflow-hidden px-6 sm:px-10 lg:px-20 py-16 sm:py-24"
        style={{
          background: "linear-gradient(135deg, #020A15 0%, #0053D0 50%, #020A15 100%)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: heading + stats */}
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Ready to use AI to <span className="italic text-blue-400">Grow</span> your Business?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-6 max-w-lg">
              Join an elite cohort of founders and business owners for the next 100-day
              transformation program. Seats are limited by invitation and application review.
            </p>

            <div className="mt-8 inline-flex flex-col sm:flex-row bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
              <div className="px-6 py-4 border-b sm:border-b-0 sm:border-r border-white/10">
                <p className="text-white font-semibold">28 Days</p>
                <p className="text-gray-300 text-xs mt-1">Total Commitment</p>
              </div>
              <div className="px-6 py-4">
                <p className="text-white font-semibold">Blended Learning</p>
                <p className="text-gray-300 text-xs mt-1">Executive Cohort</p>
              </div>
            </div>
          </div>

          {/* Right: form panel */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8">
            <h3 className="text-white text-lg font-medium mb-6">Application Form</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm text-white/80 mb-2">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange("fullName")}
                  placeholder="Emmanuel Kelvin"
                  className="w-full rounded-full px-4 py-3 text-sm text-[#191A15] placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="companyEmail" className="block text-sm text-white/80 mb-2">
                  Company Email
                </label>
                <input
                  id="companyEmail"
                  type="email"
                  required
                  value={formData.companyEmail}
                  onChange={handleChange("companyEmail")}
                  placeholder="emmanuel@company.com"
                  className="w-full rounded-full px-4 py-3 text-sm text-[#191A15] placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm text-white/80 mb-2">
                  Company Name
                </label>
                <input
                  id="companyName"
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={handleChange("companyName")}
                  placeholder="Acme Holding"
                  className="w-full rounded-full px-4 py-3 text-sm text-[#191A15] placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm text-white/80 mb-2">
                  Job Title
                </label>
                <input
                  id="jobTitle"
                  type="text"
                  required
                  value={formData.jobTitle}
                  onChange={handleChange("jobTitle")}
                  placeholder="Chief Executive Officer"
                  className="w-full rounded-full px-4 py-3 text-sm text-[#191A15] placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 rounded-full transition"
              >
                {status === "submitting" ? "Submitting..." : "Submit Application →"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  Application submitted successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="bg-[#0A0F1C] border-t border-blue-500/30 px-6 sm:px-10 lg:px-20 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Remsana. Copyright and rights reserved</p>
          <div className="flex gap-2">
            <a href="#" className="hover:text-white transition">Terms and Conditions</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;