import React from "react";
import InstalledApps from "../Components/InstalledApps";

const Installation = () => {
  return (
    <>
      <div>
        <div className="text-center py-10">
          <h1 className=" font-bold text-4xl mb-5 text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
            {" "}
            Your Installed Apps
          </h1>
          <p className="text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {/* sort section */}
        <div className="flex items-center justify-between py-5 max-w-[1200px] mx-auto ">
          <h1 className="text-2xl font-semibold px-2">
            {" "}
            <span> 0 </span>Installed App{" "}
          </h1>
          {/* sorting */}
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              // value={sortOrder}
              // onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by size</option>
              <option value="price-asc">min to max</option>
              <option value="price-desc">max to min</option>
            </select>
          </label>
        </div>
      </div>
      <InstalledApps></InstalledApps>
    </>
  );
};

export default Installation;
