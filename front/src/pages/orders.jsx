import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const baseUrl = "http://localhost:3001/api";
  const [orders, setOrders] = useState([{}]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/getOrders`)
      .then((response) => {
        // console.log(response.data);
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const handleTimeFormatting = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3 font-bold">
        <thead>
          <tr className="text-center text-xl">
            <th>Order ID</th>
            <th className="hidden md:block">Date</th>
            <th>Price</th>
            <th className="hidden md:block">Items</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr className="bg-red-100 text-center" key={order.id}>
              <td className="px-1 py-3">{order.id}</td>
              <td className="hidden md:block px-1 py-3">
                {handleTimeFormatting(order.createdAt)}
              </td>
              <td className="px-1 py-3">${parseFloat(order.totalPrice)}</td>
              <td className="hidden md:block overflow-hidden">
                {order.items?.map((item) => (
                  <>{`${item.title}(${item.quantity}), `}</>
                ))}
              </td>
              <td className="text-red-500 px-1 py-3">In Progress...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
