import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero2 from "./components/Hero2";
import TextBox from "./components/TextBox";
// import { PuffGrid } from "./patterns/PuffGrid";
import { ColoredPuffGrid } from "./patterns/ColoredPuffGrid";
import { ImagePuffGrid } from "./patterns/ImagePuffGrid";
import { WidePuffGrid } from "./patterns/WidePuffGrid";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero2
        date="2020-12-22"
        smallHeaderText="Case Stories"
        headerText="Campus Skellefteå säkerställer framtidens kunskapsbehov"
        text="Hella Skellefteå vibrerar. Nya Miljardetableringar med batteritillverkaren Northvolt i spetsen får positiva effekter för näringslivet och det arbetas intensivt för att lösa alltifrån bostadsbehov till rekryteringsfrågor. Mitt i allt detta finns Campus Skellefteå, som får en nyckelroll för att möjliggöra utvecklingen. - Den industri som växer fram här är inte bara ny i Sverige utan hela Europa, vilket självklart påverkar kraven på både forskning och kompetensomvandling, säger Ida Lindh, strategiskt ansvarig på Campus"
        navButtonText="Till Case Stories"
        navDestination="Lorem Ipsum "
        imgLink="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/230000/230134-Skelleftea.jpg"
        // videoUrl="https://www.youtube.com/watch?v=F5gFwiFIViQ"
      />
      <main className="grow flex flex-col items-center justify-center text-center">
        <TextBox
          title="Lorem ipsum"
          text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        />
        <TextBox
          title=""
          text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        />

        {/* Black and white puff */}
        <div className="w-full max-w-6xl mx-auto px-4 mt-10 mb-10">
          <WidePuffGrid
            items={[
              {
                title: "Lorem Ipsum",
                href: "#",
              },
              {
                title: "Lorem Ipsum",
                href: "#",
                inverted: true,
              },
              {
                title: "Lorem Ipsum",
                href: "#",
              },
            ]}
          />
        </div>

        {/* Colored puffs */}
        <div className="mt-16 w-full max-w-6xl mx-auto px-4">
          <ColoredPuffGrid
            items={[
              {
                title: "Lorem Ipsum",
                label: "Lorem",
                href: "#",
                color: "#D3B73D",
                arrowBackgroundColor: "#721904",
              },
              {
                title: "Lorem Ipsum",
                label: "Lorem",
                href: "#",
                color: "#8B341F",
                arrowBackgroundColor: "#7B932E",
              },
              {
                title: "Lorem Ipsum",
                label: "Lorem",
                href: "#",
                color: "#9EB45A",
                arrowBackgroundColor: "#C1A016",
              },
            ]}
          />
        </div>

        {/* Image Puff */}

        <div className="w-full max-w-6xl mx-auto px-4 mt-16 mb-16">
          <ImagePuffGrid
            items={[
              {
                label: "Lorem",
                title: "Lorem Ipsum",
                image: "/images/Bergnasbron.png",
                href: "#",
              },
              {
                label: "Lorem",
                title: "Lorem Ipsum",
                image: "/images/Norrsken.png",
                href: "#",
              },
              {
                label: "Lorem",
                title: "Lorem Ipsum",
                image: "/images/Kyrkbyn.png",
                href: "#",
              },
            ]}
          />
        </div>

        <TextBox
          title="Lorem ipsum"
          text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        />

        <TextBox
          title=""
          text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
        />

        <Footer role="contentinfo" aria-label="Sidfot" />
      </main>
    </div>
  );
}

export default App;
