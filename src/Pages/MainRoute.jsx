import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Home from "./Home";
import AllAppPage from "./AllAppPage";
import Installation from "./Installation";

const MainRoute = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-base-200">
        <Outlet>
          <Home></Home>
          <AllAppPage></AllAppPage>
          <Installation></Installation>
        </Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainRoute;
