import Image from "next/image";
import { assets } from "@/constants";

export default function Process() {
  const data = [
    {
      _id: '01',
      title: 'Sign Up',
      body: 'Create an account and join our community of energy traders, investors, and suppliers.'
    },
    {
      _id: '02',
      title: 'Explore',
      body: 'Discover a vast array of energy commodities, equipment, investment opportunities, financial services, and cash back rewards.'
    },
    {
      _id: '03',
      title: 'Trade, Invest',
      body: 'Engage in energy trading by buying and selling energy commodities or electricity contracts.'
    },
    {
      _id: '04',
      title: 'Manage Your Portfolio',
      body: 'Monitor and manage your energy trading activities, investment portfolio, or financial projects through our user-friendly interface.'
    }
  ];
  return (
    <div className="w-full flex justify-center my-20 py-20">
      <div className="container relative grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-12">
        {data.map((item) => (
          <div className="lg:pe-10 text-center md:text-start mb-10 md:mb-0" key={item._id}>
            <div className="flex items-center mb-3 justify-center md:justify-start">
              <h1 className="main-text font-bold text-3xl me-2">
                {item._id}
              </h1>
              <h1 className="font-bold text-xl">
                {item.title}
              </h1>
            </div>
            <p className="text-gray-600 text-sm leading-[25px]">
              {item.body}
            </p>
          </div>
        ))}

        <Image
          src={assets.arrow_u}
          alt="arrow"
          className="hidden lg:block absolute -bottom-32 left-20"
        />

        <Image
          src={assets.arrow_n}
          alt="arrow"
          className="hidden lg:block absolute -top-32 left-96"
        />

        <Image
          src={assets.arrow_u}
          alt="arrow"
          className="hidden lg:block absolute -bottom-32 right-52"
        />
      </div>
    </div>
  )
}
