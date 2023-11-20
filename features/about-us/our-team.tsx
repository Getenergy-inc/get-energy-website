import { assets } from "@/constants";
import Link from "next/link";
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

export default function OurTeam() {
  return (
    <div className="w-full flex justify-center">
      <div className="container my-10 w-full">
        <div className="w-full text-center flex items-center justify-center">
          <h1 className="font-bold main-text text-4xl border-b-8 pb-1 main-border">Our Team</h1>
        </div>

        <div className="w-full block md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {teamData.map((item, id) => (
            <div className="w-full mb-5 mb:mb-0" key={id}>
              <div className="w-full h-[600px]">
                <Image src={item.img} alt="get-energy-team" className="w-full h-full object-cover" />
              </div>
              <div className="text-xl font-bold mt-4">
                <h1 className="sub-text">{item.title}</h1>
                <h2 className="main-text">{item.position}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-center">
          <Link className="sub-button p-2 px-6 rounded-full" href="/our-team">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}
