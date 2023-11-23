import Image from "next/image";

const whatsInItData = [
  { heading: "Solar Power Solutions", body: "Harness the sun's energy with top-notch solar panels and kits." },
  {
    heading: "Green Gadgets & Gizmos",
    body: "Explore energy-efficient appliances and smart devices for a sustainable lifestyle.",
  },
  {
    heading: "Cutting-Edge Energy Equipment",
    body: "From wind turbines to energy storage batteries gear up for the future of power!",
  },
  {
    heading: "Home Energy Management",
    body: "Optimize your living space with energy-saving bulbs, smart appliances, and more.",
  },
  {
    heading: "Hybrid Vehicles & Spare Parts",
    body: "Embrace sustainable transport with our hybrid vehicle options, spare parts, and accessories.",
  },
  { heading: "CNG Gas Vehicles", body: "Explore an eco-friendly ride with our range of CNG gas vehicles." },
];

const WhatsInIt = () => {
  return (
    <div className="container mx-auto grid grid-cols-2">
      <div className="self-start">
        <Image
          src={"/images/bg/man-with-cards.png"}
          alt="a man working in construction"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-6">
        <h3 className="text-4xl font-bold">What&apos;s In Store for You?</h3>

        <div className="space-y-6 pr-8">
          {whatsInItData.map((data, id) => (
            <div key={id} className="flex items-center gap-4 max-w-lg">
              <div className="w-12 h-12 flex-shrink-0 rounded-full shadow-lg bg-white text-xl font-bold grid place-content-center">
                {id + 1}
              </div>
              <p className="text-lg leading-relaxed">
                <span className="font-semibold">{data.heading}:</span> {data.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsInIt;
