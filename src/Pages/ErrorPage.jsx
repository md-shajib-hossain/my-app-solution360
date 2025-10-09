import React from "react";
import { NavLink, useRouteError } from "react-router";
import errorpage from "../assets/error-404.png";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center">
        <div className="w-[300px] gap-3">
          <img src={errorpage} alt="app error.jpg" />
        </div>
        <div>
          <p className="text-xl font-bold">Oops! Page Not Found</p>
          <NavLink to="/">
            <button className="btn w-[230px] py-2 text-xl text-white bg-linear-to-r from-purple-600 -to bg-purple-400">
              Go to Home
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
