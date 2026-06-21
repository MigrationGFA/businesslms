import Quote from "../assets/qoute.svg";

const Qoute = () => {
  return (
    <section className="relative overflow-hidden bg-[#161C28] px-6 py-20 sm:px-8 md:px-12 lg:px-16 xl:px-20 md:py-40">
      {/* Horizontal gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(90deg,rgba(0,83,208,0.4)_0%,rgba(22,28,40,0)_50%,rgba(0,83,208,0.4)_100%)]"
      />

      {/* Content */}
      <div className="relative">
         <img
          src={Quote}
          alt="Quote"
          className="md:w-14  w-4 mb-6 absolute "
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="mb-6 text-white font-normal text-center md:text-left leading-relaxed text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            AI is no longer a future trend, it is reshaping how businesses
            operate, compete and grow.
          </h1>

          <p className="text-white font-light text-sm sm:text-base leading-7 sm:leading-8 text-center md:text-left">
            Unlike technical AI courses designed for developers, this programme
            focuses strictly on business transformation. We equip you with the
            knowledge, tools and strategic frameworks to adopt AI responsibly
            and profitably.
          </p>
        </div>
       
      </div>
    </section>
  );
};

export default Qoute;
