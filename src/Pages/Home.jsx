import React from "react";
import Banner from "../Components/Banner";
import Banner2 from "../Components/Banner2";
import FeaturedApps from "../Components/FeaturedApps";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <Banner2></Banner2>
      <FeaturedApps></FeaturedApps>
    </div>
  );
};

export default Home;
