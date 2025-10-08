import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import img from "../assets/demo-app (6).webp";

const InstalledApps = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-2 px-2 rounded-lg flex items-center justify-between bg-white ">
      <div className="Left flex gap-2">
        <div>
          <img className="w-[80px]" src={img} alt="" />
        </div>
        <div>
          <div>
            <h1 className="mb-4">Apps Title</h1>
          </div>
          <div className="flex items-center">
            <div className="flex items-center r">
              <span>
                <AiOutlineDownload />
              </span>
              <p>download</p>
            </div>
            <div className="flex items-center ">
              <span>
                <AiOutlineDownload />
              </span>
              <p>reviews</p>
            </div>
            <div className="flex items-center ">
              <span>
                <AiOutlineDownload />
              </span>
              <p>size</p>
            </div>
          </div>
        </div>
      </div>
      {/* 
      
      
      */}
      <div className="Right">
        <button className="px-4 py-2 rounded-md bg-green-500 text-white text-lg font-normal">
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledApps;
