import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Home from "./Home";
import AllAppPage from "./AllAppPage";
import Installation from "./Installation";
import { ToastContainer } from "react-toastify";
import Nav2 from "../Components/Nav2";

const MainRoute = () => {
  return (
    <>
      <div>
        <Nav2></Nav2>

        <div className="bg-base-200">
          <Outlet>
            <Home></Home>
            <AllAppPage></AllAppPage>
            <Installation></Installation>
          </Outlet>
        </div>

        <Footer></Footer>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
};

export default MainRoute;
