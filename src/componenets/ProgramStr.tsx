const ProgramStr = () => {
  return (
    <section className="bg-[#F0F6FF] text-[#191A15] px-6 sm:px-10 lg:px-20">
      <div className="py-12 sm:py-16 lg:py-20">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-light">
          Program Structure
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-6">
          Hybrid (in-person + online) | Designed for busy CEOs and founders
        </p>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5">
          {/* Program Date - column 1, spans both rows */}
          <div className="md:col-start-1 md:row-start-1 md:row-span-2 bg-[#BFD7FF] rounded-2xl p-6 sm:p-8 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B3FD9]">
              Program Date
            </h3>
            <div className="w-12 h-1 bg-[#0B3FD9] mt-3 mb-6 rounded-full" />
            <p className="text-xl sm:text-2xl leading-snug">
              August 3rd - September 30th 2027
            </p>
          </div>

          {/* 2 days In-person Classroom session - column 2, top row */}
          <div className="md:col-start-2 md:row-start-1 bg-[#E8E2D6] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold">
              2 days In-person Classroom session
            </h3>
            <p className="text-sm sm:text-base text-[#191A15]/70 mt-3">
              Two days sessions for CEOs/founders with Remsana Business Academy
            </p>
          </div>

          {/* 98 days Online session - column 2, bottom row (under beige) */}
          <div className="md:col-start-2 md:row-start-2 bg-[#E9DFF5] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold">
              98 days Online session
            </h3>
            <p className="text-sm sm:text-base text-[#191A15]/70 mt-3">
              98 days online sessions for CEOs/founders with Remsana Business Academy
            </p>
          </div>

          {/* Final Day Session - column 3, top row only, short */}
          <div className="md:col-start-3 md:row-start-1 bg-[#DCEFE0] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold">
              Final Day Session
            </h3>
            <p className="text-sm sm:text-base text-[#191A15]/70 mt-3">
              Practical or demo day on what was learnt during the program
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramStr;