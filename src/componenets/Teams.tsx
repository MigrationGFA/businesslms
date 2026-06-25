import TeamOne from "../assets/MrDebo.webp"
import TeamTwo from "../assets/TunjiOke.webp"
import TeamThree from "../assets/MrSeun.webp"
import TeamFour from "../assets/MrsElizabeth.webp"
const Teams = () => {
  const members = [
    {
      name: "Mr. Adebola Omololu",
      role: "Executive Chairman/Managing Director",
      image: TeamOne,
    },
    {
      name: "Mr. Tunji Oke",
      role: "Co Founder/CCO",
      image: TeamTwo,
    },
    {
      name: "Mr. Seun Adeboyejo",
      role: "Head of Product & Technology (CTO)",
      image: TeamThree,
    },
    {
      name: "Mrs Elizabeth Mbanuzue",
      role: "Dean of Learning",
      image: TeamFour,
    },
  ];

  return (
    <section className="bg-[#F6F6F6] overflow-hidden">
      <div className="px-6 sm:px-10 lg:px-20 py-16 sm:py-20">
        <p className="text-sm text-gray-500">Meet the Experts</p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-2 leading-tight text-[#191A15] ">
          Meet Your <span className="text-blue-600">Executive <br></br> Support Team</span>
        </h2>

        {/* Mobile: horizontal scroll-snap. Desktop: 4-column grid */} 
        <div
          className="
            mt-10 flex md:grid md:grid-cols-4 gap-5
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory md:snap-none
            -mx-6 px-6 sm:-mx-10 sm:px-10 md:mx-0 md:px-0
            scrollbar-hide
          "
        >
          {members.map((member, index) => (
            <div
              key={index}
              className="
                snap-start shrink-0
                w-[70%] xs:w-[55%] sm:w-[40%] md:w-auto
                bg-white rounded-2xl border border-gray-200 p-3
              "
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-square object-cover rounded-xl"
              />
              <div className="text-center mt-4 pb-2">
                <h3 className="font-semibold text-sm text-[#191A15]">{member.name}</h3>
                <p className="text-sm text-[#191A15]/70 mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;