import Hero from "@/components/Hero";
import { Meteors } from "@/components/ui/Meteor";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden sm:px-10 px-5">
      <Meteors number={30} className="absolute inset-0 z-0 pointer-events-none" />
      <FloatingNav navItems={[
        { name: "Home", link: "/", icon: <FaHome /> }
      ]} />

      <div className="relative z-20 max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
