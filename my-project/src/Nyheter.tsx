import "./App.css";
import Header from "./components/Header";
import Hero2 from "./components/Hero2";
// import { PuffGrid } from "./patterns/PuffGrid";
import { ColoredPuffGrid } from "./patterns/ColoredPuffGrid";
import { ImagePuffGrid } from "./patterns/ImagePuffGrid";
import { WidePuffGrid } from "./patterns/WidePuffGrid";
import TextBox from "./components/TextBox";
import Footer from "./components/Footer";

function App() {
  return (
    <body className="min-h-screen flex flex-col max-w-[1920px] justify-self-center">
      <Header />
      <Hero2
        date="2020-12-22"
        smallHeaderText="Case Stories"
        headerText="Campus Skellefteå säkerställer framtidens kunskapsbehov"
        text="Hella Skellefteå vibrerar. Nya Miljardetableringar med batteritillverkaren Northvolt i spetsen får positiva effekter för näringslivet och det arbetas intensivt för att lösa alltifrån bostadsbehov till rekryteringsfrågor. Mitt i allt detta finns Campus Skellefteå, som får en nyckelroll för att möjliggöra utvecklingen. - Den industri som växer fram här är inte bara ny i Sverige utan hela Europa, vilket självklart påverkar kraven på både forskning och kompetensomvandling, säger Ida Lindh, strategiskt ansvarig på Campus"
        navButtonText="Till startsidan"
        navDestination="/Bj-rnmamman-LIA/"
        imgLink="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/230000/230134-Skelleftea.jpg"
        // videoUrl="https://www.youtube.com/watch?v=F5gFwiFIViQ"
      />
        <Footer />
    </body>
  );
}

export default App;
