import "../App.css";

type HeroProps = {
  headerText: string;
  text: string;
  navButtonText: string;
  navDestination: string;
  imgLink: string;
};

function Hero2({
  headerText,
  text,
  navButtonText,
  navDestination,
  imgLink,
}: HeroProps) {
  return (
    <>
      <div className="top-0 self-start w-full z-20 mb-8">
        <div className="relative w-full">
          <img
            src={imgLink}
            className="w-full object-cover lg:h-[50vh] xl:h-[75vh]"
            alt=""
          />

          <div className="absolute top-1/5 -translate-y-1/2 z-20 bg-white w-48">
            <div className="text-right">
              <a
                href={navDestination}
                className="inline-flex items-center gap-2 text-black p-8"
              >
                <img
                  src="src/assets/images/blackArrowLeft.png"
                  className="h-4 w-4"
                  alt="arrow"
                />
                {navButtonText}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white relative -top-40 w-[80%] mx-auto">
          <div className="flex flex-col lg:m-0">
            <h2 className="text-black text-center text-4xl m-4 line-clamp-4 mx-8 font-bold">
              {headerText}
            </h2>

            <h3 className="text-black text-center text-xl m-4 mx-8">{text}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
