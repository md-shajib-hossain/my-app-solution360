import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Home from "./Home";
import AllAppPage from "./AllAppPage";
import Installation from "./Installation";
import { toast, ToastContainer } from "react-toastify";
import AppNotFound from "../AppNotFound";

const MainRoute = () => {
  // useEffect(() => {
  //   toast("Toast working from MainRoute!");
  // }, []);
  return (
    <>
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
