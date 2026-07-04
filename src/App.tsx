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
      <Nav />
      <main>
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
