import "../App.css";
import "./NavButton";
import NavButton from "./NavButton";

function Header() {
  return (
    <>
      <header className="bg-black text-white w-max min-w-full max-w-7xl mx-auto">
        <div className="flex">
          <a className="text-2xl font-bold text-center v-full min-v-full flex items-center justify-center  px-6">
              SKELLEFTEÅ
          </a>
            <div className=" flex justify-center flex-grow">
            <NavButton buttonText="Om oss" href="om-oss" />
            <NavButton buttonText="Nyheter" href="nyheter" />
            <NavButton buttonText="Kontakt" href="kontakt" />
            <NavButton buttonText="Placeholder" href="Placeholder" />
            <NavButton buttonText="Placeholder" href="Placeholder" />
            <NavButton buttonText="Placeholder" href="Placeholder" />
            </div>
        </div>
      </header>
    </>
  );
}

export default Header;