import "../App.css";
import "./NavButton";

type HeroProps = {
  bigText: string;
  smallText: string;
  imgLink: string;
};

function Hero2({ bigText, smallText, imgLink }: HeroProps) {
  return (
    <div className="sticky top-0 w-full z-20 bg-black">
      <div className="flex flex-col md:flex-row w-full h-96">
        
        <div className="w-full md:w-1/2 h-full">
          <img
            src={imgLink}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 h-full flex justify-center items-center bg-black p-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="[text-shadow:0_2px_10px_rgba(0,0,0,1)]">
              {bigText}
            </h1>
            <h2 className="w-9/12 [text-shadow:0_2px_10px_rgba(0,0,0,1)] mt-4">
              {smallText}
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
}


export default Hero2;
