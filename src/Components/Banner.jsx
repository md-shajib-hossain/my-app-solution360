import React from "react";
import bannerimg from "../assets/hero.png";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col  max-w-[700px] mx-auto space-y-10 pt-10 border">
        <div className="text-center ">
          <h1 className="text-4xl font-bold pb-5">
            We Build <br />{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className=" text-md text-gray-500">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="flex items-center gap-5 mx-auto">
          <button className="btn btn-outline">Google Play </button>
          <button className="btn btn-outline">App Store</button>
        </div>
        <div>
          <img src={bannerimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
