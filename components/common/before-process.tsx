const BeforeProcess = ({ headline, description }: { headline: string; description: string }) => {
  return (
    <div className="container my-10 w-full">
      <div className="w-full grid grid-cols-2 gap-8 p-12">
        <div className="overflow-hidden">
          <div>
            <p className="font-bold text-xl md:text-3xl lg:text-4xl">{headline}</p>
          </div>
        </div>

        <div className="overflow-hidden">
          <div>
            <p className="mt-5 md:text-xl leading-8">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeProcess;
