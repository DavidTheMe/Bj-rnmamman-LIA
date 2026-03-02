import "../App.css";
import "./NavButton";
import NavButton from "./NavButton";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-white text-white w-max min-w-full max-w-7xl mx-auto z-50">
        <div className="flex" >
          <a className="text-2xl font-bold text-center h-full v-full min-v-full flex items-center justify-center px-6">
            <img src="https://skelleftea.se/images/18.57e3b0a17a75fbf0652ca88/1630320903542/skell-eftea.png" alt="Skelefteå logga" className="w-auto"/>
          </a>

          <div className="justify-center flex-grow hidden md:flex">
            <NavButton buttonText="Om oss" href="om-oss" />
            <NavButton buttonText="Nyheter" href="nyheter" />
            <NavButton buttonText="Kontakt" href="kontakt" />
          </div>

          <div className=" bg-[#985A1C] hover:bg-[#B87F45] m-3 space-y-2 rounded p-4 shadow md:hidden " onClick={() => setMenuOpen(!menuOpen)}>
            <span className="block h-0.5 w-8 bg-gray-100"></span>
            <span className="block h-0.5 w-8 bg-gray-100"></span>
            <span className="block h-0.5 w-8 bg-gray-100"></span>
          </div>
        </div>

          {menuOpen && (
            <div className="md:hidden flex flex-col gap-3 bg-black px-6 pb-4 w-full text-center">
              <NavButton buttonText="Om oss" href="om-oss" />
              <NavButton buttonText="Nyheter" href="nyheter" />
              <NavButton buttonText="Kontakt" href="kontakt" />
            </div>
          )}

      </header>
    </>
  );
}

export default Header;
