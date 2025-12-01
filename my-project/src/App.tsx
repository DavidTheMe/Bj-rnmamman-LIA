import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero1 from "./components/Hero1";
import TextBox from "./components/TextBox";
import { PuffGrid } from "./patterns/PuffGrid";
import { ImagePuffGrid } from "./patterns/ImagePuffGrid";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero1
        bigText="Lorem Ipsum"
        smallText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        imgLink="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/230000/230134-Skelleftea.jpg"
      />
      <main className="grow flex flex-col items-center justify-center text-center">
        <PuffGrid

          items={[
            {
              title: "Lorem Ipsum",
              subtitle: "Lorem",
              href: "#",
            },
            {
              title: "Lorem Ipsum",
              subtitle: "Lorem",
              href: "#",
            },
            {
              title: "Lorem Ipsum",
              subtitle: "Lorem",
              href: "#",
            },
            {
              title: "Lorem Ipsum",
              subtitle: "Lorem",
              href: "#",
            },
            {
              title: "Lorem Ipsum",
              subtitle: "Lorem",
              href: "#",
            },
            {
              title: "Lorem Ipsum",
              subtitle: "Lorem",
              href: "#",
            },
          ]}
        />

        <div className="mt-16 w-full">


          <ImagePuffGrid

            items={[

              {
                title: "Lorem Ipsum",
                subtitle: "Lorem",
                image: "/images/placeholder.png",
                href: "#",
              },
              {
                title: "Lorem Ipsum",
                subtitle: "Lorem",
                image: "/images/placeholder.png",
                href: "#",
              },
              {
                title: "Lorem Ipsum",
                subtitle: "Lorem",
                image: "/images/placeholder.png",
                href: "#",
              },
            ]}

          />
        </div>

        <TextBox title="Lorem ipsum" text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." />
        <TextBox title="" text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos." />
        <Footer role="contentinfo" aria-label="Sidfot" />
      </main>
    </div>
  );
}

export default App;
