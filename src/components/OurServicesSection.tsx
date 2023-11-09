import { ourServices } from "@/data";
import React from "react";
import ServicesCard from "./ServicesCard";

type OurServicesSectionProps = {};

const OurServicesSection: React.FC<OurServicesSectionProps> = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-8">
      <h3 className="text-4xl mb-6">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ourServices.map((service, index) => (
          <ServicesCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};
export default OurServicesSection;
