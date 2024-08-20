import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center text-2xl">
      <span><strong>Error 404! </strong>{":("}</span>
      
      <span>The URL you're looking for is not available</span>
      <br />

      <NavLink to="/"> <span className="text-blue-500">Go back to Home</span></NavLink>
    </div>
  );
};

export default ErrorPage;
