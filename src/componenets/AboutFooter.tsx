import { type FC } from "react";

const AboutFooter: FC = () => {
  return (
    <>
      {/* CTA Section */}
      <section
        className="relative overflow-hidden px-6 sm:px-10 lg:px-20 py-16 sm:py-24 bg-gradient-to-br from-[#020A15] via-[#051833] to-[#01070F]"
      >
        {/* Ambient background glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col items-start text-left">
          {/* Subtitle */}
          <p className="text-sm sm:text-base font-normal text-blue-400 uppercase tracking-wider mb-4">
            Our Journey
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight max-w-4xl mb-6">
            A battle-tested execution engine behind Africa’s most visible digitization programs.
          </h2>

          {/* Paragraph */}
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mb-10 leading-relaxed font-light">
            Our underlying proprietary software architecture has powered public, private, and state-level transformation programs at scale.
          </p>

          {/* Card */}
          <div className="bg-[#EBF3FE] rounded-[24px] p-6 sm:p-8 lg:p-10 w-full max-w-md shadow-xl shadow-black/25 border border-blue-200/15">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0053D0] mb-2 tracking-tight">
              Learn
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm font-normal mb-6 leading-relaxed">
              Business Audit, AI Strategy, Diagnostics, Roadmap.
            </p>

            {/* Checklist */}
            <ul className="space-y-4">
              {[
                "AI Strategy",
                "Business Diagnostics",
                "AI Roadmap",
                "Department Transformation Plan",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="text-[#0053D0] shrink-0">
                    {/* Blue checkmark SVG */}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-800 font-medium tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="bg-[#0A0F1C] border-t border-blue-500/30 px-6 sm:px-10 lg:px-20 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto gap-4 text-sm text-gray-400">
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

export default AboutFooter;
