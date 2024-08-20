import React from "react";

const CartLoadingScreen = () => {
  return (
    <div className="w-screen h-[calc(100vh-128px)] md:h-[calc(100vh-80px)]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex justify-center items-center gap-4">
          <img src="./assests/icons/food-delivery.gif" alt="" />
          <span className="text-2xl text-gray-500"></span>
        </div>
      </div>
    </div>
  );
};

export default CartLoadingScreen;
