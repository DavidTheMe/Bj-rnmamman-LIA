import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { PuffGrid } from "./patterns/PuffGrid";
import { ImagePuffGrid } from "./patterns/ImagePuffGrid";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="grow flex flex-col items-center p-8 text-center">
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
      </main>
      <Footer role="contentinfo" aria-label="Sidfot" />
    </div>
  );
}

export default App;