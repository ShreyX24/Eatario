import React from "react";
import CartItems from "./CartItems";

const CartOccupied = ({
  cartItems,
  removeFromCart,
  subtotal,
  serviceCost,
  discount,
  total,
  uploadOrderToDB,
}) => {
  return (
    <div className="w-screen h-[calc(100vh-128px)] md:h-[calc(100vh-80px)] md:flex ">
      <div className="h-[70%] w-full flex  md:h-full md:w-1/2 md:justify-center md:items-center md:border-r-[1px]">
        <div
          id="cartItemWrapper"
          className="h-full w-full overflow-x-hidden overflow-y-auto flex flex-col md:max-h-[70%] md:h-auto"
        >
          {cartItems.map((item) => (
            <CartItems
              key={`${item.id}-${item.size}-${item.category}`}
              item={item}
              onRemove={() => removeFromCart(item.id, item.size, item.category)}
            />
          ))}
        </div>
      </div>
      <div className="h-[30%] w-full bg-red-100 text-red-500 font-medium md:h-full md:w-1/2 md:items-center md:bg-transparent">
        <div className="w-full h-full flex flex-col justify-center px-20">
          <div className="border-b-[1px] border-gray-400 ">
            <div className="w-full h-[40px] flex items-center justify-between px-4">
              <span>{`Subtotal (${cartItems.length} items)`}</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="w-full h-[40px] flex items-center justify-between px-4">
              <span>Service Cost</span>
              <span>${serviceCost.toFixed(2)}</span>
            </div>
            <div className="w-full h-[40px] flex items-center justify-between px-4">
              <span>Delivery Cost</span>
              <span className=" text-green-600 ">Free!</span>
            </div>
            <div className="w-full h-[40px] flex items-center justify-between px-4">
              <span>Discount</span>
              <span className=" text-green-600 ">{discount * 100}%</span>
            </div>
          </div>

          <div>
            <div className="w-full h-[40px] flex items-center justify-between px-4">
              <span>{`Total (${cartItems.length} items)`}</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="w-full flex justify-end items-center px-4 ">
              <button
                className="text-white bg-red-500 hover:bg-red-700 rounded px-5 py-1"
                onClick={uploadOrderToDB}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartOccupied;
