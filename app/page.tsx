import { PageLoader } from "@/components/effects/PageLoader";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { NoiseOverlay } from "@/components/effects/NoiseOverlay";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Timeline } from "@/components/sections/Timeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Quote } from "@/components/sections/Quote";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <NoiseOverlay />
      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Services />
        <Projects />
        <Timeline />
        <Testimonials />
        <FAQ />
        <Quote />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
