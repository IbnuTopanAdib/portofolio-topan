import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { Meteors } from "@/components/ui/Meteor";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Projects from "@/components/Projects";
import AllProjects from "@/components/AllProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden sm:px-10 px-5">
      <Meteors number={30} className="absolute inset-0 z-0 pointer-events-none" />
      <FloatingNav navItems={navItems} />

      <div className="z-20 max-w-7xl w-full">
        <Hero />
        <Grid />
        <AllProjects/>
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
