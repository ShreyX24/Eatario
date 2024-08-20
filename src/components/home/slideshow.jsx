import React, { useEffect, useState } from "react";
import { slideData } from "../../lib/definition";
import { NavLink } from "react-router-dom";

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-[calc(100vh-5rem)] md:h-[calc(100vh-8rem)]">
      <div className="flex flex-col justify-center items-center h-1/2 w-full lg:h-full lg:w-1/2 gap-5 bg-slate-50">
        <span className="flex text-center w-11/12 text-red-500 text-5xl font-bold">
          {slideData[currentSlide].title}
        </span>
        <br />
        <br />
        <NavLink
          to="/menu"
          className="flex justify-center items-center p-2 px-4 font-bold bg-red-500 hover:bg-red-700 text-white rounded-sm"
        >
          Order Now
        </NavLink>
      </div>
      <div className="flex justify-center items-center h-1/2 lg:w-1/2 lg:h-full ">
        <img
          src={slideData[currentSlide].image}
          alt=""
          className="object-cover h-full w-screen"
        />
      </div>
    </div>
  );
};

export default SlideShow;
