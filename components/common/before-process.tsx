const BeforeProcess = ({
  headline,
  description,
}: {
  headline: string;
  description: string;
}) => {
  return (
    <div className="container md:my-10 my-1 w-full">
      <div className="w-full grid md:grid-cols-2 md:gap-8 gap-4 md:p-12">
        <div className="overflow-hidden">
          <div>
            <p className="font-bold text-xl md:text-3xl lg:text-4xl">
              {headline}
            </p>
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
