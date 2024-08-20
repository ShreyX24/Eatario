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
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./pages/login";
import { AuthProvider } from "./lib/authContext";
import { CartProvider } from "./lib/cartContext";

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
      { path: "login", element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <GoogleOAuthProvider clientId="376702196162-ni7avjn9jl1qk5tte0skkid85ioomrpo.apps.googleusercontent.com">
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
