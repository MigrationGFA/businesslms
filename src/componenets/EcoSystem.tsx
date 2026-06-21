const EcoSystem = () => {
  const categories = [
    {
      number: "01",
      title: "Executive Productivity",
      count: "4 tools",
      tools: ["ChatGPT", "Microsoft Copilot", "Claude", "Google Gemini"],
    },
    {
      number: "02",
      title: "Marketing & Content",
      count: "4 tools",
      tools: ["Jasper", "Canva AI", "Synthesia", "Gamma"],
    },
    {
      number: "03",
      title: "Sales & Customer Experience",
      count: "3 tools",
      tools: ["HubSpot AI", "Salesforce Einstein", "Intercom AI"],
    },
    {
      number: "04",
      title: "Operations & Automation",
      count: "4 tools",
      tools: ["Zapier AI", "Make", "Notion AI", "Monday.com AI"],
    },
    {
      number: "05",
      title: "Executive Productivity",
      count: "4 tools",
      tools: ["Power BI Copilot", "Tableau AI", "QuickBooks AI"],
    },
  ];

  const Card = ({ cat, className = "" }: { cat: typeof categories[0]; className?: string }) => (
    <div className={`bg-white rounded-2xl border border-gray-200 p-6 ${className}`}>
      <div className="flex justify-between items-start">
        <span className="text-blue-600 font-bold text-lg">{cat.number}</span>
        <span className="text-xs text-gray-500">{cat.count}</span>
      </div>
      <h3 className="mt-4 font-semibold text-[#191A15]">{cat.title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {cat.tools.map((tool) => (
          <span
            key={tool}
            className="text-xs text-blue-600 border border-blue-200 rounded-full px-3 py-1 whitespace-nowrap"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-[#F0F6FF] overflow-hidden">
      <div className="px-6 sm:px-10 lg:px-20 py-16 sm:py-20">
        <p className="text-sm text-gray-500">The Tool Ecosystem</p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mt-2 leading-tight text-[#191A15]">
          Master the curated ecosystem of{" "}
          <span className="text-blue-600">business AI</span> solutions.
        </h2>

        {/* Mobile: horizontal scroll-snap */}
        <div
          className="
            md:hidden mt-10 flex gap-4
            overflow-x-auto snap-x snap-mandatory
            -mx-6 px-6 sm:-mx-10 sm:px-10
            scrollbar-hide
          "
        >
          {categories.map((cat) => (
            <Card key={cat.number} cat={cat} className="snap-start shrink-0 w-[78%] xs:w-[65%]" />
          ))}
        </div>

        {/* Desktop: explicit 2-then-3 layout using a 6-col grid */}
        <div className="hidden md:grid grid-cols-6 gap-4 mt-10">
          <Card cat={categories[0]} className="col-span-3" />
          <Card cat={categories[1]} className="col-span-3" />
          <Card cat={categories[2]} className="col-span-2" />
          <Card cat={categories[3]} className="col-span-2" />
          <Card cat={categories[4]} className="col-span-2" />
        </div>
      </div>
    </section>
  );
};

export default EcoSystem;