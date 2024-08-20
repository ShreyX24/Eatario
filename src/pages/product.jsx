import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PizzaSizeOptions from "../components/product/pizzaSizeOptions";
import axios from "axios";
import { useCart } from "../lib/cartContext";
import { useApi } from "../lib/apiContext";

const Product = () => {
  const { id } = useParams();
  const [itemSize, setItemSize] = useState("Regular");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);
  const [itemTotalPrice, setItemTotalPrice] = useState(0);
  const [itemAddedVisibility, setItemAddedVisibility] = useState(false);
  const [item, setItem] = useState(null);
  const { addToCart } = useCart();
  const {backendApi} = useApi();

  useEffect(() => {
    axios
      .get(`${backendApi}/product`)
      .then((response) => {
        if (response && response.data) {
          const filteredProduct = response.data.find(
            (productItem) => productItem.id === id
          );
          if (filteredProduct) {
            setItem(filteredProduct);
          } else {
            console.error("Product not found");
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, [id, backendApi]);

  // useEffect(() => {
  //   if (item) {
  //     console.log(item);
  //   }
  // }, [item]);

  const handleItemAddedToCart = () => {
    addToCart({
      id: item.id,
      title: item.title,
      size: itemSize,
      quantity: itemQuantity,
      price: itemPrice,
      totalPrice: parseFloat(itemTotalPrice, 10),
      img: item.img,
    });
    setItemAddedVisibility(true);
    setItemQuantity(1);
  };

  //Limiting the minimum quantity of an item to atleast 1
  if (itemQuantity < 1) {
    setItemQuantity(1);
  }

  if (item?.catSlug === "pizzas" && itemSize === "Regular") {
    setItemSize("Small");
  }

  useEffect(() => {
    if (item) {
      setItemPrice(item.price);
      setItemTotalPrice(item.price);

      if (itemQuantity > 1) {
        setItemTotalPrice(Math.round(item.price * itemQuantity * 100) / 100);
      }

      if (item.options) {
        const selectedOption = item.options.find(
          (option) => option.title === itemSize
        );
        const additionalPrice = selectedOption
          ? selectedOption.additionalPrice
          : 0;
        setItemPrice(parseFloat(item.price, 10) + additionalPrice);
      }
    }
  }, [item, itemSize, itemQuantity]);

  //Setting the background color of the active size option
  const sizeButtonClass = (size) =>
    `border-[1px] border-red-500 rounded px-3 py-[3px] ${
      itemSize === size ? "bg-red-500 text-white" : ""
    }`;

  return (
    <>
      {item ? (
        <div className="w-screen h-[calc(100vh-128px)] md:h-[calc(100vh-80px)] md:flex">
          <div className="w-full h-1/2 flex justify-center items-center md:h-full md:w-1/2 md:justify-end md:items-center">
            <img
              src={item.img}
              alt=""
              className="object-contain h-[90%] w-[90%] md:h-[70%] md:w-[70%] lg:h-[55%] lg:w-[55%]"
            />
          </div>
          <div className=" h-1/2 w-full p-7 flex flex-col text-red-500 gap-4 md:w-1/2 md:h-full md:justify-center">
            <span className="text-2xl font-bold">{item.title}</span>
            <p className="w-2/3">{item.desc}</p>
            <div className="flex gap-2 items-center">
              <span className="text-2xl font-bold">${itemPrice}</span>
              {itemQuantity > 1 ? (
                <span>
                  {`(Total Price:`}{" "}
                  <span className="font-bold"> ${itemTotalPrice}</span>
                  {`)`}
                </span>
              ) : (
                <></>
              )}
            </div>
            {item.catSlug === "pizzas" ? (
              <PizzaSizeOptions
                sizeButtonClass={sizeButtonClass}
                setItemSize={setItemSize}
              />
            ) : (
              <ul className="flex gap-6 items-center [&>*]:cursor-pointer">
                <li className="border-[1px] border-red-500 rounded px-3 py-[3px] bg-red-500 text-white">
                  Regular
                </li>
              </ul>
            )}
            <div className="flex gap-3 items-center ">
              <div className="flex justify-between gap-3 border-[1px] px-3 py-[3px] border-red-500 w-1/2">
                <span>Quantity</span>
                <div className="flex gap-2 font-bold items-center ">
                  <button
                    className="hover:bg-red-700 bg-red-500 text-white px-2 flex justify-center items-center rounded w-[23px]"
                    onClick={() => {
                      setItemQuantity(itemQuantity - 1);
                    }}
                  >
                    -
                  </button>
                  <span className="font-extrabold">{itemQuantity}</span>
                  <button
                    className="hover:bg-red-700 bg-red-500 text-white px-2 flex justify-center items-center rounded w-[23px]"
                    onClick={() => {
                      setItemQuantity(itemQuantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="px-5 py-1 text-white bg-red-500 hover:bg-red-700"
                onClick={() => {
                  handleItemAddedToCart();
                }}
              >
                Add To Cart
              </button>
            </div>
            {itemAddedVisibility ? (
              <span className="text-green-600 text-sm font-bold">
                {`${item.title} added to cart.`}
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Product;

//Checking the category of the item that will be passed to render images
//and description
// const getCategoryItems = (catSlug) => {
//   switch (catSlug) {
//     case "pizzas":
//       return pizzas;
//     case "burgers":
//       return burgers;
//     case "pastas":
//       return pastas;
//     default:
//       return [];
//   }
// };

//Searching for the item and its data to render on the page
// const items = getCategoryItems(category);
// const item = items.find((i) => i.id === parseInt(id));
