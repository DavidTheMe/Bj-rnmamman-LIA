import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero2 from "./components/Hero2";
import { ColoredPuffGrid } from "./patterns/ColoredPuffGrid";
import { ImagePuffGrid } from "./patterns/ImagePuffGrid";
import { WidePuffGrid } from "./patterns/WidePuffGrid";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero2
        headerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat tincidunt magna"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat tincidunt magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat tincidunt magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat tincidunt magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat tincidunt magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat tincidunt magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat tincidunt magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat tincidunt magna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat tincidunt magna "
        navButtonText="Lorem Ipsum"
        navDestination="Lorem Ipsum"
        imgLink="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/230000/230134-Skelleftea.jpg"
      />

      <main className="grow flex flex-col items-center justify-center text-center" role="main">

        {/* Black and white puff */}
        <div className="mt-16 w-full max-w-6xl mx-auto px-4">
          <WidePuffGrid
            items={[
              {
                title: "Lorem Ipsum",
                href: "#",
                position: "left",
              },
              {
                title: "Lorem Ipsum",
                href: "#",
                inverted: true,
                position: "middle",
              },
              {
                title: "Lorem Ipsum",
                href: "#",
                position: "right",
              },
            ]
          }
          />
        </div>

        {/* Colored puffs */}
        <div className="mt-16 w-full max-w-6xl mx-auto px-4">
          <ColoredPuffGrid
            items={[
              {
                title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                label: "Lorem",
                href: "#",
                color: "#D3B73D",
                arrowBackgroundColor: "#721904",
              },
              {
                title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                label: "Lorem",
                href: "#",
                color: "#8B341F",
                arrowBackgroundColor: "#7B932E",
              },
              {
                title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
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
                title: "Lorem ipsum dolor sit amet",
                image: "/images/Bergnasbron.png",
                href: "#",
              },
              {
                label: "Lorem",
                title: "Lorem ipsum dolor sit amet",
                image: "/images/Norrsken.png",
                href: "#",
              },
              {
                label: "Lorem",
                title: "Lorem ipsum dolor sit amet",
                image: "/images/Kyrkbyn.png",
                href: "#",
              },
            ]}
          />
        </div>
        
        <Footer role="contentinfo" aria-label="Sidfot" />
      
      </main>
    </div>
  );
}

export default App;
