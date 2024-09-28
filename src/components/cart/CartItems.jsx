import React from "react";

const CartItems = ({ item, onRemove }) => {
  return (
    <div className="flex w-full h-[120px] items-center  text-red-500 font-semibold md:justify-end">
      <img
        src={item.img}
        alt={item.title}
        className="object-contain h-[90%] w-1/3 md:w-auto"
      />
      <div className="flex justify-start items-center w-[65%] gap-16 md:justify-end md:w-auto md:px-10">
        <div className=" flex-col hidden md:flex md:w-[350px] overflow-hidden">
          <span className=" font-bold text-2xl uppercase ">{item.title}</span>
          <span>Size: {item.size}</span>
        </div>
        <span className="font-bold">${item.totalPrice.toFixed(2)}</span>
        <span className="font-bold">{item.quantity}</span>
        <button onClick={onRemove} className="">
          X
        </button>
      </div>
    </div>
  );
};

export default CartItems;
