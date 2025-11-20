import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ButtonBig from "./components/ButtonBig";
import ButtonSmall from "./components/ButtonSmall";

function App() {
  return (

    
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow flex flex-col items-center justify-center text-center">
        <ButtonBig buttonText="Lorem Ipsum"/>
        <ButtonSmall buttonText="Lorem Ipsum"/>
      </main>
      <Footer role="contentinfo" aria-label="Sidfot" />
    </div>
  );
}

export default App;
