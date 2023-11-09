import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="h-[300px] bg-black p-8 flex flex-col items-center justify-center gap-y-4 text-white">
      <h4 className="text-3xl">Hoopback Academy</h4>
      <p>info@mysite.com</p>
      <p className="mt-8">
        ©2023 by Hoopack Academy. Proudly created with Wix.com
      </p>
    </footer>
  );
};
export default Footer;
