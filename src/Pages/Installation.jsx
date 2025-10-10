import React, { useEffect, useState } from "react";
import InstalledApps from "../Components/InstalledApps";

const Installation = () => {
  const [installedlist, setInstalledList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installitem")) || [];
    setInstalledList(savedList);
  }, []);

  // sort function
  const sortedItems = () => {
    if (sortOrder === "size-asc") {
      return [...installedlist].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...installedlist].sort((a, b) => b.size - a.size);
    } else {
      return installedlist;
    }
  };

  const finalList = sortedItems();

  return (
    <>
      <div>
        <div className="text-center py-10">
          <h1 className="font-bold md:text-4xl mb-5 text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
            Your Installed Apps
          </h1>
          <p className="text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* sort section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-5 max-w-[1200px] mx-auto">
          <h1 className="md:text-2xl font-semibold px-2 py-2">
            <span>({finalList.length})</span> Installed App
          </h1>

          {/* sorting */}
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by Downloads</option>
              <option value="size-asc">Low to High</option>
              <option value="size-desc">High to Low</option>
            </select>
          </label>
        </div>
      </div>
      <InstalledApps
        installedList={finalList}
        setInstalledList={setInstalledList}
      />
    </>
  );
};

export default Installation;
