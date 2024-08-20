import React from "react";
import CountDown from "./countDown";
import { NavLink } from "react-router-dom";

const Offer = () => {
  return (
    <div className="flex h-[80vh] lg:h-[60vh]">
      <div className="flex w-full h-full items-center justify-end">
        <img
          src="./assests/images/offerBg.png"
          alt=""
          className="object-cover h-full w-full"
        />
        <img
          src="./assests/images/offerProduct.png"
          alt=""
          className="absolute h-[150px] w-[300px] lg:h-[400px] lg:w-[800px] mt-[400px] mr-[50px] lg:mt-0 lg:mr-0"
        />
      </div>
      <div className="absolute [&>*]:text-white h-[80vh] lg:h-[60vh] lg:w-1/2 flex">
        <div className="h-full w-full flex flex-col justify-start lg:justify-center items-center lg:items-start lg:p-16">
          <div className="lg:w-[600px] lg:py-3 text-center lg:text-left flex flex-col">
            <span className=" p-8 lg:p-5 text-white text-4xl lg:text-6xl font-bold">
              Delicious Burger & French Fry
            </span>
            <p className="p-5">
              Progressively simplify effective e-toilers and process-centric
              methods of empowerment. Quickly pontifiate parallel
            </p>
          </div>

          <div className="text-yellow-400 p-5 py-5 font-bold text-4xl">
            <CountDown />
          </div>
          <div>
            <NavLink
              to="/menu"
              className="m-[20px] p-2 px-4 bg-red-500 hover:bg-red-700 text-white font-bold rounded-sm"
            >
              Order Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
