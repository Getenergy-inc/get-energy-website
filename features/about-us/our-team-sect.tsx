import { assets } from "@/constants";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Image from "next/image";

const teamData = [
  {
    id: 1,
    img: assets.team_1,
    title: "Babashola Santos A.",
    position: "CEO - PKIS",
  },
  {
    id: 1,
    img: assets.team_2,
    title: "Anna Simelia.",
    position: "CTO - PKIS",
  },
  {
    id: 1,
    img: assets.team_3,
    title: "Martins Scott.",
    position: "Head of Design - PKIS",
  },
];

const OurTeamSection = () => {
  return (
    <div className="space-y-10 container mx-auto mt-40">
      <p className="text-primaryBlue text-center font-bold px-7 py-4 w-fit mx-auto rounded-full bg-primaryBlue/20">
        Our Team
      </p>
      <p className="font-extrabold text-4xl max-w-xl mx-auto text-center">Meet people behind our company</p>

      <div className="flex items-center justify-between gap-2">
        <div>
          <ArrowLeftCircle className="text-primaryBlue cursor-pointer" size={34} />
        </div>
        <div className="w-full block md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {teamData.map((item, id) => (
            <div className="w-full mb-5 mb:mb-0 bg-white rounded-md drop-shadow-md overflow-hidden" key={id}>
              <div className="w-full h-[340px]">
                <Image src={item.img} alt="get-energy-team" className="w-full h-full object-cover" />
              </div>
              <div className="text-xl font-bold mt-4 p-4">
                <h1 className="sub-text">{item.title}</h1>
                <h2 className="main-text">{item.position}</h2>
              </div>
            </div>
          ))}
        </div>
        <div>
          <ArrowRightCircle className="text-primaryBlue cursor-pointer" size={34} />
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
