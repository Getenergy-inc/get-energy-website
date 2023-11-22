import Image from "next/image";

const BeforeFooterAction = ({ text }: { text: string }) => {
  return (
    <div className="container mx-auto py-16 rounded-xl bg-[#003B6D33] relative text-center justify-center items-center flex">
      <div className="absolute top-0 left-0 w-full h-full -z-[1]">
        <Image
          src={"/images/bg/back-circle.png"}
          alt="circle thing"
          width={900}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-10">
        <p className="font-bold text-4xl max-w-[80%] mx-auto text-center">{text}</p>

        <div>
          <button className="flex mx-auto w-fit items-center gap-2 bg-primaryBlue rounded-lg px-6 py-3 text-white">
            <span>Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeforeFooterAction;
