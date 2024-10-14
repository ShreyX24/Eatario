import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./input.css";
import "./index.css";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import ErrorPage from "./error-page";
import Cart from "./pages/cart";
import Orders from "./pages/orders";
import LandingPage from "./pages/landingPage";
import Pastas from "./components/menu/pastas";
import Burgers from "./components/menu/burgers";
import Pizzas from "./components/menu/pizzas";
import Product from "./pages/product";
import { CartProvider } from "./lib/cartContext";
import { ApiProvider } from "./lib/apiContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "menu", element: <Menu /> },
      { path: "menu/pastas", element: <Pastas /> },
      { path: "menu/burgers", element: <Burgers /> },
      { path: "menu/pizzas", element: <Pizzas /> },
      { path: "contact", element: <Contact /> },
      { path: "orders", element: <Orders /> },
      { path: "cart", element: <Cart /> },
      { path: "product/:category/:id", element: <Product /> },
    ],
  },
]);

function App() {
  return (
      <CartProvider>
        <ApiProvider>
          <RouterProvider router={router} />
        </ApiProvider>
      </CartProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
