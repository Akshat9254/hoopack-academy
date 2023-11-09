import React from "react";

type SubscribeFormProps = {};

const SubscribeForm: React.FC<SubscribeFormProps> = () => {
  return (
    <div
      id="subscribe"
      className="bg-black text-white h-64 p-8 flex flex-col items-center justify-center space-y-6"
    >
      <h3 className="text-4xl">Subscribe Form</h3>
      <form className="flex w-full justify-center">
        <input
          type="text"
          className="bg-neutral-800 p-4 outline-none rounded-l-md w-1/3"
          placeholder="e.g., email@example.com"
        />
        <button className="bg-red-600 rounded-r-md p-4">Join</button>
      </form>
    </div>
  );
};
export default SubscribeForm;
