import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero1 from "./components/Hero1";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
        <Hero1 bigText="Lorem Ipsum" smallText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." imgLink="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/230000/230134-Skelleftea.jpg"/>
      <main className="grow flex flex-col items-center justify-center text-center">
      </main>
      <Footer role="contentinfo" aria-label="Sidfot" />
    </div>
  );
}

export default App;
