import React from "react";

const Offerbar = () => {
  return (
    <div className="flex max-md:flex-col justify-center items-center bg-red-500 text-gray-50 max-md:h-16 h-8">
      <span>Upto 20% discount on orders above<span className="font-semibold"> INR 250</span>. </span>
      
      <span>  Hurry Up! Order Now.</span>
    </div>
  );
};

export default Offerbar;
