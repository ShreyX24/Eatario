import React from "react";

import Navbar from "../components/landingpage/navbar";
import Offerbar from "../components/landingpage/offerbar";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Offerbar />
      <Navbar />

      <div id="detail">
        <Outlet />
      </div>
      
    </>
  );
};

export default LandingPage;
