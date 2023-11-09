import React from "react";

type ServicesCardProps = {
  imgSrc: string;
  title: string;
  duration?: string;
  status?: string;
  price: string;
};

const ServicesCard: React.FC<ServicesCardProps> = ({
  imgSrc,
  title,
  duration,
  status,
  price,
}) => {
  return (
    <div className="border-neutral-500 border-[1px] flex flex-col shadow-lg rounded-lg">
      <img src={imgSrc} alt={title} className="h-[400px] rounded-t-lg" />
      <div className="flex flex-col p-4 gap-y-4 justify-between flex-1">
        <div className="flex flex-col gap-y-4">
          <h5 className="text-2xl font-thin">{title}</h5>
          <div className="h-[1px] w-full bg-neutral-500 rounded-lg" />
          {duration && <p>{duration}</p>}
          {status && <p>{status}</p>}
          {price && <p>{price}</p>}
        </div>
        <button className="py-2 px-4 self-end rounded-md bg-neutral-600 hover:bg-neutral-700">
          Book Now
        </button>
      </div>
    </div>
  );
};
export default ServicesCard;
