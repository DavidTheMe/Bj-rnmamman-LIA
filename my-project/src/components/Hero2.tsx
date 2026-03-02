import "../App.css";
import arrow from "../assets/images/blackArrowLeft.png";

type HeroProps = {
  headerText: string;
  text: string;
  navButtonText: string;
  navDestination: string;
  imgLink: string;
  date: string;
  smallHeaderText: string;
};

function Hero2({
  date,
  smallHeaderText,
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
            className="w-full object-cover xl:h-[50vh]"
            alt=""
          />

          <div className="absolute top-1/5 -translate-y-1/2 z-20 bg-white w-48">
            <div className="text-right w-max">
              <a
                href={navDestination}
                className="inline-flex items-center gap-2 text-black p-5 font-bold justify-self-end"
              >
                <img
                  src={arrow}
                  className="h-4 w-4 justify-self-start"
                  alt="Arrow"
                />
                <p className="justify-self-end pl-2">
                {navButtonText}
                </p>
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
