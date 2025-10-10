import React from "react";
import apperror from "./assets/App-Error.png";
import { Link } from "react-router";
const AppNotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img src={apperror} alt="apperror.jpg" className="" />
        <h1 className="text-2xl font-bold py-5">Oops! App Not Found.</h1>
        <Link to="/allapps">
          <button className="mb-5 btn w-[230px] max-auto py-2 text-xl text-white bg-linear-to-r from-purple-600 -to bg-purple-400">
            Show All Apps
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppNotFound;
