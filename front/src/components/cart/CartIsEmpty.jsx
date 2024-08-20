import React from "react";

const CartIsEmpty = () => {
  return (
    <div className="w-screen h-[calc(100vh-128px)] md:h-[calc(100vh-80px)]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex items-center gap-4 opacity-70">
          <img src="./assests/icons/empty-cart.png" alt="" height="60" width="60"/>
          <span className="text-2xl text-gray-500">Cart is empty . . .</span>
        </div>
      </div>
    </div>
  );
};

export default CartIsEmpty;
