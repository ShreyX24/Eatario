import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  const [menuClick, setMenuClick] = useState(true);

  const handleMenuClick=()=>{
    setMenuClick(true)
  }

  const navLinkStyles = ({isActive}) => ({
    fontWeight: isActive ? "bold" : "",
    color: isActive ? "red" : "grey",
    listStyleType: isActive ? "circle" : "none",
    display: "inline-block",
    width: "100%",
    padding: "10px 0",
  });

  return (
    <div className="md:hidden max-md:p-2 z-10">
      <button
        onClick={() => {
          setMenuClick(!menuClick);
        }}
      >
        {menuClick ? (
          <img src="./assests/icons/open.png" alt="" height="20" width="20" />
        ) : (
          <img src="./assests/icons/close.png" alt="" height="20" width="20" />
        )}
      </button>
      {menuClick ? (
        <></>
      ) : (
        <ul 
        className="flex flex-col justify-center items-center gap-10 absolute top-32 right-0 border border-red-500 bg-white w-screen h-[calc(100vh-128px)] text-4xl [&>*]:self-stretch [&>*]:text-center [&>*:hover]:text-red-500 ">
          <li>
            <NavLink
              to="/home"
              style={navLinkStyles}
              onClick={handleMenuClick}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/menu"
              style={navLinkStyles}
              onClick={handleMenuClick}
            >
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              style={navLinkStyles}
              onClick={handleMenuClick}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              style={navLinkStyles}
              onClick={handleMenuClick}
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              style={navLinkStyles}
              onClick={handleMenuClick}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
