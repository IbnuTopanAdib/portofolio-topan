import Hero from "@/components/Hero";
import { Meteors } from "@/components/ui/Meteor";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden sm:px-10 px-5">
      <Meteors number={30} className="absolute inset-0 z-0 pointer-events-none" />

      <div className="relative z-20 max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
