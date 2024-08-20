import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
      <NavLink to="/">
        <span className="text-red-500 font-bold text-3xl tracking-wide max-md:p-4">
          Eaterio
        </span>
      </NavLink>
    
  );
};

export default Logo;
