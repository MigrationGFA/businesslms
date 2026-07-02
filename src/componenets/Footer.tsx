import { useState, type FC } from "react";
import axios from "axios";
import ResultModal from "./ResultModal";

const Footer: FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyEmail: "",
    companyName: "",
    phoneNumber: "",
    jobTitle: "",
    hearAboutUs: "",
    hearAboutUsOther: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [responseMessage, setResponseMessage] = useState("");
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  const BOOKING_URL =
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1XxYL_OOCdf5m9zqSECG6f0jQjgEDe6dR-XI97Mn9uqJAVBCxQyzxNVdhkA9o8bQlSCT1RKKE6";

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const validatePhoneNumber = (phone: string) => {
    // Remove spaces, dashes, brackets etc.
    const cleaned = phone.replace(/\D/g, "");

    // Local format: 08012345678
    if (cleaned.startsWith("0")) {
      return cleaned.length === 11;
    }

    // International format: 2348012345678
    if (cleaned.startsWith("234")) {
      return cleaned.length === 13;
    }

    return false;
  };

  const phoneError =
    formData.phoneNumber && !validatePhoneNumber(formData.phoneNumber);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validatePhoneNumber(formData.phoneNumber)) {
      setStatus("error");
      setResponseMessage(
        "Please enter a valid Nigerian phone number (e.g. 08012345678 or +2348012345678).",
      );
      setIsResultModalOpen(true);
      return;
    }

    setStatus("submitting");
    setResponseMessage("");

    try {
      const endpoint = import.meta.env.VITE_APPLICATION_FORM_ENDPOINT;
      const payload = {
        full_name: formData.fullName,
        email: formData.companyEmail,
        company_name: formData.companyName,
        phone_number: formData.phoneNumber,
        job_title: formData.jobTitle,
        hear_about_us:
          formData.hearAboutUs === "Other"
            ? formData.hearAboutUsOther
            : formData.hearAboutUs,
      };

      const response = await axios.post(endpoint, payload, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Application response:", response.data);

      const data = response.data;
      const msg =
        typeof data === "string"
          ? data
          : data?.messages?.success ||
            data?.message ||
            "Application submitted successfully!";
      setResponseMessage(msg);
      setStatus("success");
      setIsResultModalOpen(true);
      setFormData({
        fullName: "",
        companyEmail: "",
        companyName: "",
        phoneNumber: "",
        jobTitle: "",
        hearAboutUs: "",
        hearAboutUsOther: "",
      });
    } catch (error: any) {
      console.error("Error response data:", error.response?.data);
      console.error(error);
      const data = error.response?.data;
      const msg =
        typeof data === "string"
          ? data
          : data?.messages?.error ||
            data?.messages?.message ||
            data?.message ||
            data?.error ||
            "Something went wrong. Please try again.";
      setResponseMessage(msg);
      setStatus("error");
      setIsResultModalOpen(true);
    }
  };

  return (
    <>
      <section
        className="relative overflow-hidden px-6 sm:px-10 lg:px-20 py-16 sm:py-24"
        style={{
          background:
            "linear-gradient(135deg, #020A15 0%, #0053D0 50%, #020A15 100%)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left: heading + stats */}
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Ready to use AI to{" "}
              <span className="italic text-blue-400">Grow</span> your Business?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-6 max-w-lg">
              Join an elite cohort of founders and business owners for the next
              100-day transformation program. Seats are limited by invitation
              and application review.
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
          <div className="bg-[#1C2333]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-white text-lg font-medium mb-6">
              Application Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm text-white/80 mb-2"
                >
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
                <label
                  htmlFor="companyEmail"
                  className="block text-sm text-white/80 mb-2"
                >
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
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm text-white/80 mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange("phoneNumber")}
                  placeholder="+234 801 234 5678"
                  className="w-full rounded-full px-4 py-3 text-sm text-[#191A15] placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {phoneError && (
                  <p className="mt-2 text-sm text-red-500">
                    Please enter a valid Nigerian phone number.
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm text-white/80 mb-2"
                >
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
                <label
                  htmlFor="jobTitle"
                  className="block text-sm text-white/80 mb-2"
                >
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
              <div>
                <label
                  htmlFor="footer-hearAboutUs"
                  className="block text-sm text-white/80 mb-2"
                >
                  How did you hear about us?
                </label>
                <select
                  id="footer-hearAboutUs"
                  required
                  value={formData.hearAboutUs}
                  onChange={handleChange("hearAboutUs")}
                  className="w-full rounded-full px-4 py-3 text-sm text-[#191A15] bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="YouTube">YouTube</option>
                  <option value="Email">Email</option>
                  <option value="SMS">SMS</option>
                  <option value="From a Friend">From a Friend</option>
                  <option value="Facebook">Facebook</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="X (Twitter)">X (Twitter)</option>
                  <option value="TikTok">TikTok</option>
                  <option value="Other">Other</option>
                </select>

                {formData.hearAboutUs === "Other" && (
                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="Please specify"
                      required
                      value={formData.hearAboutUsOther}
                      onChange={handleChange("hearAboutUsOther")}
                      className="w-full rounded-full px-4 py-3 text-sm text-[#191A15] placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 rounded-full transition"
              >
                {status === "submitting"
                  ? "Submitting..."
                  : "Submit Application →"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="bg-[#0A0F1C] border-t border-blue-500/30 px-6 sm:px-10 lg:px-20 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6 text-sm text-gray-400">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p>© 2026 Remsana. Copyright and rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-1">
              <a
                href="mailto:info@remsana.com"
                className="hover:text-white transition flex items-center gap-1.5"
              >
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@remsana.com
              </a>
              <span className="hidden sm:inline">·</span>
              <a
                href="tel:07070498994"
                className="hover:text-white transition flex items-center gap-1.5"
              >
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +2347070498994
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="#" className="hover:text-white transition">
              Terms and Conditions
            </a>
            <span>·</span>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
      <ResultModal
        isOpen={isResultModalOpen}
        status={status as "success" | "error"}
        message={responseMessage}
        bookingUrl={BOOKING_URL}
        onClose={() => {
          setIsResultModalOpen(false);
          setStatus("idle");
        }}
      />
    </>
  );
};

export default Footer;
