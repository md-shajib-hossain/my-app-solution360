import React from "react";
import { useState } from "react";
import useProductsData from "../Hook/useProductsData";
import { Audio } from "react-loader-spinner";
import { Link, NavLink } from "react-router";
import apperror from "../assets/App-Error.png";
import { AiOutlineDownload } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
const AllAppPage = () => {
  const { allData, loading, error } = useProductsData();

  const [search, setSearch] = useState("");
  const modifiedSearch = search.trim().toLocaleLowerCase();
  console.log(search);
  const searchApps = modifiedSearch
    ? allData.filter((app) =>
        app.title.toLocaleLowerCase().includes(modifiedSearch)
      )
    : allData;

  // console.log(allData);
  if (loading)
    return (
      <div className="flex justify-center items-center h-[300px]">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  if (error) return <div>Error:Data Not Found</div>;

  // search functionality

  //
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center py-10">
          <h1 className="font-bold text-4xl mb-5 text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
            {" "}
            All Apps
          </h1>
          <p className="text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {/* search section */}
        <div className="flex items-center justify-between py-5 ">
          <h1 className="text-2xl font-semibold px-2">
            {" "}
            <span> ({searchApps.length}) </span>App Found{" "}
          </h1>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="py-1 w-[350px] bg-white rounded-lg rounded-r-none px-4"
            type="search"
            name="search"
            placeholder="🔎 Search here"
          />
        </div>

        {/* card starts? */}
        {modifiedSearch && searchApps.length === 0 ? (
          <div className="w-[300px] mx-auto flex flex-col text-center gap-3">
            <img src={apperror} alt="app error.jpg" />
            <p className="text-xl font-bold">Oops! App Not Found</p>

            <button
              onClick={() => setSearch("")}
              className="btn bg-purple-500 text-white text-xl mb-3"
            >
              Go Back
            </button>
          </div>
        ) : (
          <section className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {searchApps.map((singleData) => (
              <Link key={singleData.id} to={`/appdetails/${singleData.id}`}>
                <div key={singleData.id} className="">
                  <div className="card bg-base-100 shadow-sm">
                    <figure>
                      <img
                        className="h-[280px] w-full object-cover overflow-hidden"
                        src={singleData.image}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title ">{singleData.title}</h2>
                      <div className="card-actions flex justify-between">
                        <div className="bg-green-100 rounded-lg py-1 px-3 flex items-center text-lg font-semibold text-green-700">
                          <strong>
                            <AiOutlineDownload />
                          </strong>
                          {singleData.downloads}
                        </div>
                        <div className="bg-yellow-100 rounded-lg py-1 px-3 flex items-center text-lg font-semibold text-yellow-600">
                          <strong className="">
                            <AiFillStar />
                          </strong>
                          {singleData.ratingAvg}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default AllAppPage;
