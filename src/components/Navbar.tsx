import { navLinks } from "@/data";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className="min-h-24 bg-black py-4 px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-2 text-white">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <h1 className="text-3xl cursor-pointer">
          Hoopback <span className="hidden sm:inline">Academy</span>
        </h1>
        {isMenuOpen ? (
          <X className="cursor-pointer lg:hidden" onClick={toggleMenuOpen} />
        ) : (
          <Menu className="cursor-pointer lg:hidden" onClick={toggleMenuOpen} />
        )}
      </div>
      <div
        className={twMerge(
          "flex flex-col lg:flex-row gap-x-4 gap-y-2 transition-all ease-in-out duration-500",
          isMenuOpen
            ? "flex opacity-100"
            : "hidden opacity-0 lg:flex lg:opacity-100"
        )}
      >
        {navLinks.map((navLink) => (
          <a
            key={navLink.name}
            className="cursor-pointer text-sm font-light hover:font-normal"
            href={navLink.path}
          >
            {navLink.name}
          </a>
        ))}
        <ShoppingCart className="cursor-pointer" />
      </div>
    </nav>
  );
};
export default Navbar;
