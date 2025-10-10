import React from "react";
import apperror from "../assets/App-Error.png";
import { Link } from "react-router";
const AppError = () => {
  return (
    <div>
      <div className="w-[300px] mx-auto flex flex-col text-center gap-3">
        <img src={apperror} alt="app error.jpg" />
        <div className="flex gap-2 py-5 flex-col items-center justify-center">
          <p className="text-xl font-bold">Oops! App Not Found</p>
          <Link to="/allapps">
            <button className="btn w-[230px] max-auto py-2 text-xl text-white bg-linear-to-r from-purple-600 -to bg-purple-400">
              Show All Apps
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppError;
