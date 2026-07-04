import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Services } from "./components/Services";
import { Signature } from "./components/Signature";
import { PriceGuide } from "./components/PriceGuide";
import { Gallery } from "./components/Gallery";
import { BeforeAfter } from "./components/BeforeAfter";
import { Reviews } from "./components/Reviews";
import { About } from "./components/About";
import { Faq } from "./components/Faq";
import { Visit } from "./components/Visit";
import { Footer } from "./components/Footer";
import { MobileBar } from "./components/MobileBar";
import { initAnalytics } from "./lib/analytics";

export default function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

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
        <Signature />
        <PriceGuide />
        <Gallery />
        <BeforeAfter />
        <Reviews />
        <About />
        <Faq />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
