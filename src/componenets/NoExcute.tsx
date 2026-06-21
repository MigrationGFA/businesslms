const NoExcute = () => {
  const row1 = ["Strategic Objectives", "Prioritized Functions", "Tool Selection", "Implementation Timing"];
  const row2 = ["Panel Presentation", "12-Month Roadmap", "Budget Estimates", "Risk Governance"];
  const allSteps = [...row1, ...row2];

  return (
    <section className="bg-[#F6F6F6] overflow-hidden">
      <div className="px-6 sm:px-10 lg:px-20 py-16 sm:py-24">
        <p className="text-sm text-gray-500">The Graduation Milestone</p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-2 leading-tight">
          <span className="text-blue-600">No exams.</span>
          <br />
          <span className="text-[#191A15]">Just execution.</span>
        </h2>
        <p className="text-sm sm:text-base text-[#191A15]/60 mt-6 max-w-2xl">
          Instead of a traditional examination, you complete an actionable Executive
          AI Transformation Plan custom-tailored to your organisation and present it
          directly to a panel of AI experts and business leaders.
        </p>

        {/* Mobile/Tablet: simple vertical flow */}
        <div className="mt-12 flex flex-col items-center gap-3 lg:hidden">
          {allSteps.map((step, index) => (
            <div key={step} className="flex flex-col items-center w-full max-w-xs">
              <div className="bg-blue-600 text-white text-sm font-medium rounded-xl px-6 py-3 text-center w-full">
                {step}
              </div>
              {index < allSteps.length - 1 && (
                <div className="w-0.5 h-4 bg-blue-600" />
              )}
            </div>
          ))}
        </div>

        {/* Desktop: snake flow */}
        <div className="hidden lg:flex flex-col items-stretch gap-0 mt-16">
          {/* Row 1: left to right */}
          <div className="flex items-center">
            {row1.map((step, index) => (
              <div key={step} className="flex items-center flex-1">
                <div className="bg-blue-600 text-white text-sm font-medium rounded-xl px-4 py-4 text-center flex-1">
                  {step}
                </div>
                {index < row1.length - 1 && (
                  <div className="w-6 h-0.5 bg-blue-600 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Vertical connector under the last box of row 1 (right side) */}
          <div className="flex justify-end">
            <div className="w-0.5 h-6 bg-blue-600 mr-[12.5%]" />
          </div>

          {/* Row 2: visually right to left (reversed), connects under row 1's last box */}
          <div className="flex items-center flex-row-reverse">
            {row2.map((step, index) => (
              <div key={step} className="flex items-center flex-row-reverse flex-1">
                <div className="bg-blue-600 text-white text-sm font-medium rounded-xl px-4 py-4 text-center flex-1">
                  {step}
                </div>
                {index < row2.length - 1 && (
                  <div className="w-6 h-0.5 bg-blue-600 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoExcute;