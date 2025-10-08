import React from "react";

const Banner2 = () => {
  return (
    <div>
      <section className="bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
        <div className="text-center py-10">
          <h1 className="text-white text-3xl font-semibold">
            Trusted By Millions,Built For You
          </h1>
        </div>
        <div className="text-white flex justify-between max-w-[700px] mx-auto pb-10">
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-300">Total Downloads</p>
            <h1 className="text-5xl font-bold">29.6M</h1>
            <p className="text-sm text-gray-300">21% More Than Last Month </p>
          </div>
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-300">Total Reviews</p>
            <h1 className="text-5xl font-bold">906K</h1>
            <p className="text-sm text-gray-300">46% More Than Last Month </p>
          </div>
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-300">Active Apps</p>
            <h1 className="text-5xl font-bold">132+</h1>
            <p className="text-sm text-gray-300">31 More Will Launch </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner2;
