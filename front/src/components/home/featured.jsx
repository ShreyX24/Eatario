import React from "react";
import { featuredProducts } from "../../lib/definition";

const Featured = () => {
  return (
    <div id="featuredWrapper" className="w-screen overflow-x-auto overflow-y-hidden">
      <div className="w-max flex">
        {featuredProducts.map((data) => (
          <div key={data.id} 
          className="w-[410px] lg:w-[500px] h-[85vh] flex flex-col items-center justify-center bg-slate-50 hover:bg-red-100 text-center">
            <div className="relaive h-1/2">
              <img src={data.img} alt="" className="h-4/5 w-full trans" />
            </div>
            <div className="flex flex-col gap-9 justify-center items-center">
              <span className="text-red-500 text-2xl font-extrabold">{data.title}</span>
              <p className="text-red-500 w-[85%] h-max">{data.desc}</p>
              <span className="text-red-500 font-bold"> ${data.price}</span>
            </div>
            <br />
            <div>
              <button className="p-2 px-4 bg-red-500 hover:bg-red-700 text-white font-bold rounded-sm">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
