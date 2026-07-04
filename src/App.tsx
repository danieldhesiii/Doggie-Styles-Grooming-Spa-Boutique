import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { About } from "./components/About";
import { Visit } from "./components/Visit";
import { Footer } from "./components/Footer";
import { MobileBar } from "./components/MobileBar";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:font-semibold focus:text-ivory"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <Gallery />
        <Reviews />
        <About />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
