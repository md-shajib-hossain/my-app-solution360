import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Home from "./Home";

const MainRoute = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-base-200">
        <Outlet>
          <Home></Home>
        </Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainRoute;
