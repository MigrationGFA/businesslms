const ProgramOut = () => {
  const outcomes = [
    {
      number: "01",
      title: "Profit",
      description: "The ultimate measure of operational health and efficiency",
    },
    {
      number: "02",
      title: "Business Growth",
      description: "Enhance marketing, sales, customer service and finance workflows",
    },
    {
      number: "03",
      title: "Smart Decision-Making",
      description: "Leverage AI for business intelligence and data-driven insights",
    },
    {
      number: "04",
      title: "Networking",
      description: "Enhance marketing, sales, customer service and finance workflows",
    },
    {
      number: "05",
      title: "Risk & Governance",
      description: "Master data privacy, ethical AI adoption and regulatory compliance",
    },
    {
      number: "06",
      title: "Actionable Roadmap",
      description: "Build a practical AI implementation blueprint tailored to your organization",
    },
  ];

  const roadmap = [
    {
      title: "Learn",
      subtitle: "Business Audit, AI Strategy, Diagnostics, Roadmap",
      items: ["AI Strategy", "Business Diagnostics", "AI Roadmap", "Department Transformation Plan"],
    },
    {
      title: "Implement",
      subtitle: "Automation, CRM, AI Agents, Operations",
      items: ["Automated Processes", "Team Enablement", "AI Adoption", "Initial ROI"],
    },
    {
      title: "Scale",
      subtitle: "Investor Readiness, Growth, Demo Day, Pitch",
      items: ["Productivity Gains", "Cost Reduction", "Revenue Opportunities", "AI Dashboard"],
    },
    {
      title: "Optimize",
      subtitle: "Performance, Revenue, Cost, Productivity",
      items: ["Investor Readiness", "Demo Day Prep", "Growth Strategy", "Transformation Report"],
    },
  ];

  return (
    <section className="bg-[#F6F6F6] overflow-hidden">
      {/* Program Outcomes */}
      <div className="px-6 sm:px-10 lg:px-20 py-16 sm:py-20">
        <p className="md:text-lg  text-sm">Program Outcomes</p>
        <h2 className="text-3xl md:text-7xl mt-2">
          What you will <span className="text-blue-600">achieve</span>
        </h2>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div
          className="
            mt-10 flex md:grid md:grid-cols-3 gap-4
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory md:snap-none
            -mx-6 px-6 sm:-mx-10 sm:px-10 md:mx-0 md:px-0
            scrollbar-hide
          "
        >
          {outcomes.map((item) => (
            <div
              key={item.number}
              className="
                snap-start shrink-0
                w-[60%] xs:w-[65%] sm:w-[45%] md:w-auto
                bg-[#0053D0]/20 rounded-2xl p-6
              "
            >
              <div className="flex items-center gap-28">
                <span className="text-[#0053D0] font-bold text-lg">{item.number}</span>
                <span className="h-1 w-48  bg-[#0053D0]/70" />
              </div>
              <h3 className="mt-4 font-semibold text-[#191A15]">{item.title}</h3>
              <p className="text-sm  mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Transformation Roadmap */}
      <div className="border-t border-blue-500 px-6 sm:px-10 lg:px-20 py-16 sm:py-20">
        <p className="md:text-lg text-sm">The 100-Day Business Journey</p>
        <h2 className="text-3xl md:text-7xl mt-2 leading-tight">
          Your transformation <br className="hidden sm:block" />
          <span className="text-blue-600">Roadmap.</span>
        </h2>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div
          className="
            mt-10 flex md:grid md:grid-cols-4 gap-4
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory md:snap-none
            -mx-6 px-6 sm:-mx-10 sm:px-10 md:mx-0 md:px-0
            scrollbar-hide
          "
        >
          {roadmap.map((stage) => (
            <div
              key={stage.title}
              className="
                snap-start shrink-0
                w-[80%] xs:w-[70%] sm:w-[50%] md:w-auto
                bg-[#0053D0]/20 rounded-2xl p-6
              "
            >
              <h3 className="font-bold text-blue-600">{stage.title}</h3>
              <p className="text-xs text-[#191A15]/50 mt-1">{stage.subtitle}</p>
              <ul className="mt-4 space-y-2">
                {stage.items.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-[#191A15]/80">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramOut;