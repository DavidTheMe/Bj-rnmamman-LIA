import "../App.css";
import "./NavButton";

type HeroProps = {
  bigText: string;
  smallText: string;
  imgLink: string;
};

function Hero1({ bigText, smallText, imgLink }: HeroProps) {
  return (
    <>
      <div className="sticky top-0 self-start w-full z-20">
        <div className="relative w-full">
          <img
            src={imgLink}
            className="w-full object-cover sm:h-[50vh] xl:h-[75vh]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="[text-shadow:0_2px_10px_rgba(0,0,0,1)] text-center">
              {bigText}
            </h1>
            <h2 className="w-9/12 lg:w-6/12 xl:w-4/12 [text-shadow:0_2px_10px_rgba(0,0,0,1)] text-center">
              {smallText}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero1;
