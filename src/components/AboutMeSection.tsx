import React from "react";

type AboutMeSectionProps = {};

const AboutMeSection: React.FC<AboutMeSectionProps> = () => {
  return (
    <section id="about" className="bg-red-600 min-h-[600px] p-8 flex">
      <div className="bg-black flex-1 py-4 px-8 flex items-center justify-center">
        <div className="flex flex-col w-5/6 md:w-3/4 lg:w-1/2 h-full py-4 justify-evenly">
          <div>
            <h3 className="text-red-600 text-4xl mb-2">About Me</h3>
            <p className="text-white text-lg font-thin text-justify">
              As a professional Basketball Coach, I have become well-known and
              respected throughout the greater San Francisco area. After
              training with some of the greatest athletes in the world, I
              developed my own unique and effective teaching methods. I focus on
              getting your body and mind focused on the game and preparing you
              to compete against the best.
            </p>
          </div>
          <button className="py-4 px-8 text-red-600 border-red-600 border-2 rounded-md hover:bg-red-400/30 duration-200">
            Schedule Session
          </button>
        </div>
      </div>
    </section>
  );
};
export default AboutMeSection;
