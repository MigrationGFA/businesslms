const TutionFee = () => {
  const includes = [
    "100-Day Program Access",
    "2-Day Physical Residency",
    "Premium Mobile App Access",
    "14 Private Strategy Sessions",
    "Demo Day Exhibition Slot",
  ];

  return (
    <section
      className="relative overflow-hidden px-6 sm:px-10 lg:px-20 py-16 sm:py-24"
   style={{
    background: "linear-gradient(135deg, #020A15 0%, #0053D0 50%, #020A15 100%)",
  }}
    >
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white text-center max-w-3xl mx-auto leading-tight">
        The 100-Day Transformation.
      </h2>

      {/* Pricing card */}
      <div className="mt-12 max-w-4xl mx-auto bg-[#F0F6FF] rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Tuition */}
        <div>
          <p className="text-sm font-medium text-[#191A15]">Tuition</p>
          <p className="text-4xl sm:text-5xl font-bold text-[#191A15] mt-2">
            N450,000
          </p>
          <span className="inline-block bg-yellow-300 text-[#191A15] text-xs font-medium px-3 py-1 rounded-full mt-3">
            Travel and lodging not included.
          </span>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div className="flex items-center gap-2 text-sm text-[#191A15]/70">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Cohort starts
              </div>
              <span className="text-sm font-medium text-[#191A15]">August 3, 2026</span>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div className="flex items-center gap-2 text-sm text-[#191A15]/70">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
                Capacity
              </div>
              <span className="text-sm font-medium text-[#191A15]">150 participants only</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#191A15]/70 pb-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              Abeokuta Campus Hub + Digital
            </div>
          </div>

          <button className="mt-6 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition">
            Apply for a seat →
          </button>
        </div>

        {/* Right: Includes panel */}
        <div className="bg-[#E1ECFF] rounded-2xl p-6">
          <p className="text-sm font-semibold text-[#191A15] mb-4">Includes</p>
          <ul className="space-y-3">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#191A15]/80">
                <span className="text-[#191A15]/40 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TutionFee;