import "../App.css";

type HeroProps = {
  text: string;
  navButtonText: string;
  navDestination: string;
  imgLink: string;
};

function Hero1({ text, navButtonText, navDestination, imgLink }: HeroProps) {
return (
<div className="relative w-full h-[75vh] overflow-hidden">
    <div className="absolute inset-0">
        <img src={imgLink} alt="background image" className="w-full h-full object-cover" />
        <div className="absolute inset-0"></div>
    </div>

    <div className="relative w-full md:w-[36vw] flex items-center h-full">
        <div className="bg-white md:h-[33vh] w-full">
            <div className=" h-full">
                <h2 className="text-2xl font-bold mb-4 text-black h-full text-4xl p-12 overflow-hidden leading-snug">
                    {text}
                </h2>
                <div className="flex flex-col flex-row gap-4 md:relative md:-top-12">
                    <a className="bg-black text-white w-full p-5 px-12 font-bold" href={navDestination}>
                        {navButtonText}
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
);

  // return (
  //   <>
  //     <div className="top-0 self-start w-full z-20 mb-8">
  //       <div className="relative w-full lg:h-[66vh]">
  //         <img
  //           src={imgLink}
  //           className="w-full h-full object-cover"
  //         />
  //       </div>

  //       <div className="bg-white w-full lg:w-1/3 lg:absolute lg:top-0 lg:mt-[25vh] lg:mt-[5vh] lg:left-0 h-1/3 ">
  //         <div className="flex flex-col mx-24 lg:m-0">
  //           <h2 className="text-black text-center lg:text-left lg:text-5xl m-12 max-h-60 lg:line-clamp-4 font-bold mb-[35vh]">
  //             {text}
  //           </h2>

  //           <a className="w-full bg-black lg:relative lg:-top-70" href={navDestination}>
  //             <div className="m-4 text-left">
  //               <p
  //                 className="inline-flex items-center gap-2 text-white "
  //               >
  //                 {navButtonText}
  //               </p>
  //                 <img
  //                   src="src/assets/images/arrowRight.png"
  //                   className="h-4 w-4 float-right"
  //                   alt="arrow"
  //                 />
  //             </div>
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default Hero1;