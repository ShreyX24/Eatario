import React from "react";
import Offer from "../components/home/offer";
import SlideShow from "../components/home/slideshow";
import Featured from "../components/home/featured";
import Footer from "../components/home/footer";

const Home = () => {
  return (
    <>
      <SlideShow />
      <Featured />
      <Offer />
      <Footer />
    </>
  );
};

export default Home;
