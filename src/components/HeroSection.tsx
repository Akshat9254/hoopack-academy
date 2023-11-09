import { heroImage } from "@/assets";
import React from "react";

type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <main className="bg-neutral-900 flex flex-col md:flex-row min-h-fit p-8 gap-4">
      <figure className="flex-1 flex items-start justify-center">
        <img src={heroImage} className="h-[700px]" />
      </figure>
      <div className="flex-1 flex flex-col justify-center items-center gap-y-4 text-white text-center">
        <h1 className="text-6xl lg:text-8xl">
          Ace Your Game with Hoopack Academy
        </h1>
        <p className="text-xl font-thin">A Basketball Coach For All Levels</p>
      </div>
    </main>
  );
};
export default HeroSection;
