import { bannerImage1 } from "@/assets";
import React from "react";

type BannerSectionProps = {};

const BannerSection: React.FC<BannerSectionProps> = () => {
  return (
    <section className="bg-red-600 min-h-[600px] flex flex-col lg:flex-row p-8 gap-8">
      <div className="flex-1 flex items-center justify-center">
        <figure className="h-[400px] lg:h-[500px] bg-white">
          <img
            src={bannerImage1}
            alt="banner"
            className="h-full relative top-[-15px] left-[15px] shadow-lg"
          />
        </figure>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-y-4 text-white text-center">
        <h2 className="text-5xl">On Time or Your Money Back</h2>
        <span className="text-xl font-thin">Truly Top-Notch</span>
        <p className="font-thin">
          This is your Feature description. Write a short blurb explaining what
          the feature is and why it matters for visitors, customers or clients.
          Don’t be afraid to toot your own horn! Take this opportunity to
          emphasize the important benefits or key advantages.
        </p>
      </div>
    </section>
  );
};
export default BannerSection;
