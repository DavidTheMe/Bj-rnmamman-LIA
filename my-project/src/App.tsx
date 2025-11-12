import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (

    
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow flex flex-col items-center justify-center text-center">
        <h1>test</h1>
      </main>
      <Footer role="contentinfo" aria-label="Sidfot" />
    </div>
  );
}

export default App;