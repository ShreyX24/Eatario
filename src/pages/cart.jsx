import React, { useState } from "react";
import { useCart } from "../lib/cartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CartLoadingScreen from "../components/cart/CartLoadingScreen";
import CartIsEmpty from "../components/cart/CartIsEmpty";
import CartOccupied from "../components/cart/CarOccupied";
import { useApi } from "../lib/apiContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCartAfterOrderCreation } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const { backendApi } = useApi();

  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const serviceCost = 1.25;
  const discount = 0.2; // 20%

  const total =
    Math.round((subtotal + serviceCost) * (1 - discount) * 100) / 100;

  const uploadOrderToDB = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${backendApi}/createOrder`, {
        cartItems,
        total,
      });
      // console.log("Order created:", response);
      // Handle successful order creation (e.g., clear cart, show confirmation)
      if (response.status === 201) {
        clearCartAfterOrderCreation();
        setTimeout(() => {
          setIsLoading(false);
          navigate("/orders");
        }, 3000);
      }
    } catch (error) {
      console.error("Error creating order:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <>
      {isLoading ? (
        <>
          <CartLoadingScreen />
        </>
      ) : (
        <>
          {cartItems.length === 0 ? (
            <CartIsEmpty />
          ) : (
            <CartOccupied
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              subtotal={subtotal}
              serviceCost={serviceCost}
              discount={discount}
              total={total}
              uploadOrderToDB={uploadOrderToDB}
            />
          )}
        </>
      )}
    </>
  );
};

export default Cart;
