import React from "react";
import MobileMenu from "./mobileMenu";
import DesktopMenu from "./desktopMenu";

const Navbar = () => {
  return (
    <nav className="max-md:h-16 h-12 flex justify-between items-center border-b-2 lg:px-16 xl:px-28 text-red-500 border-red-500 p-4">
      {/* Desktop Menu */}
      <DesktopMenu />

      {/* <Logo/> */}

      {/* Mobile Menu */}
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
