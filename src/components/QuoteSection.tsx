import { quoteImage } from "@/assets";
import React from "react";

type QuoteSectionProps = {};

const QuoteSection: React.FC<QuoteSectionProps> = () => {
  return (
    <section className="min-h-[400px] bg-neutral-900 flex flex-col lg:flex-row py-8 gap-8">
      <div className="flex-1 flex flex-col items-center justify-center text-white">
        <p className="text-2xl">
          “Nothing great was ever achieved without enthusiasm”
        </p>
        <span className="text-lg font-thin">Ralph Waldo Emerson</span>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <figure>
          <img src={quoteImage} alt="quoteImage" className="h-[300px]" />
        </figure>
      </div>
    </section>
  );
};
export default QuoteSection;
