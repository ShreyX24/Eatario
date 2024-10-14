import React from "react";
import Logo from "./logo";
import { NavLink } from "react-router-dom";

const DesktopMenu = () => {

  return (
    <>
      <ul className="hidden md:flex w-80 h-full gap-8 justify-center items-center  [&>*]:font-semibold ">
        <li>
          <NavLink
            to="/home"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "grey" : "red",
              };
            }}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/menu"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "grey" : "red",
              };
            }}
          >
            Menu
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "grey" : "red",
              };
            }}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      <Logo />

      <ul className="hidden md:flex w-90 h-full gap-6 justify-center items-center [&>*]:font-semibold">
        <li className=" flex gap-1 text-black bg-yellow-400 px-2 rounded ">
          <img className="" src="./assests/icons/phone.png" alt="" width="18" />
          <span>+91-1234567890</span>
        </li>
        <li>
          <NavLink
            to="/orders"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "grey" : "red",
              };
            }}
          >
            Orders
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/cart"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "grey" : "red",
              };
            }}
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default DesktopMenu;
