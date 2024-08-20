import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Pizzas = () => {
  const baseUrl = "http://localhost:3001/api";
  const [pizzas, setPizzas] = useState([{}]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/product`)
      .then((response) => {
        if (response && response.data) {
          const filteredPizzas = response.data.filter(
            (pizzaItem) => pizzaItem.catSlug === "pizzas"
          );
          setPizzas(filteredPizzas);
        }
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <div className="h-max w-screen flex flex-col p-3 lg:flex-row lg:h-[calc(100vh-80px)] lg:flex-wrap lg:p-0 lg:items-center">
      {pizzas &&
        pizzas.map((pizza, index) => (
          <div
            className="h-[60%] w-full flex flex-col justify-between items-center gap-7 border-[1px] border-red-500 hover:bg-red-100 lg:h-1/2 lg:w-1/3 lg:flex-grow lg:gap-0"
            key={pizza.id}
          >
            <div className="h-[70%] w-[90%] flex justify-center items-center p-2 lg:h-[70%] lg:p-0 lg:mt-2">
              <img
                src={pizza.img}
                alt=""
                className="object-contain h-[85%] w-[90%]"
              />
            </div>
            <div className="flex justify-between items-center p-4 w-full text-red-500 font-bold text-[20px]">
              <span>{pizza.title}</span>

              <div className="flex justify-center items-center gap-2">
                <span>${pizza.price}</span>
                <NavLink
                  to={`/product/pizza/${pizza.id}`}
                  className="bg-red-500 hover:bg-red-700 text-white px-4 rounded text-center flex items-center"
                >
                  <span>+</span>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
    </div>
    // </div>
  );
};

export default Pizzas;
