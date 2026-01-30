import "../App.css";

type HeroProps = {
  text: string;
  navButtonText: string;
  navDestination: string;
  imgLink: string;
};

function Hero1({ text, navButtonText, navDestination, imgLink }: HeroProps) {
  return (
    <>
      <div className="top-0 self-start w-full z-20 mb-8">
        <div className="relative w-full">
          <img
            src={imgLink}
            className="w-full object-cover lg:h-[50vh] xl:h-[75vh]"
          />
        </div>

        <div className="bg-white w-full lg:w-1/3 lg:absolute lg:top-0 lg:mt-[20vh] xl:mt-[45vh] lg:left-0 max-h-60 ">
          <div className="flex flex-col mx-24 lg:m-0">
            <h2 className="text-black text-center lg:text-left lg:text-4xl m-4 max-h-60 line-clamp-4 mx-16">
              {text}
            </h2>

            <div className="w-full bg-black">
              <div className="m-4 text-right">
                <a
                  href={navDestination}
                  className="inline-flex items-center gap-2 text-white"
                >
                  {navButtonText}
                  <img
                    src="src/assets/images/arrowRight.png"
                    className="h-4 w-4"
                    alt="arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero1;
