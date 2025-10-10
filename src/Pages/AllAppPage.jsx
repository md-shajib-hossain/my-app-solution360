import React, { useState, useEffect } from "react";
import useProductsData from "../Hook/useProductsData";
import { Audio } from "react-loader-spinner";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router";
import apperror from "../assets/App-Error.png";
import { AiOutlineDownload, AiFillStar } from "react-icons/ai";
import ErrorPage from "./ErrorPage";

const AllAppPage = () => {
  const { allData, loading, error } = useProductsData();

  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false); // 👈 spinner state
  const [searchApps, setSearchApps] = useState([]);

  // 🔹 when search input changes
  useEffect(() => {
    setSearchLoading(true);

    const timer = setTimeout(() => {
      const modifiedSearch = search.trim().toLowerCase();
      const filtered = modifiedSearch
        ? allData.filter((app) =>
            app.title.toLowerCase().includes(modifiedSearch)
          )
        : allData;
      setSearchApps(filtered);
      setSearchLoading(false);
    }, 200); // ⏳ small delay to mimic "live searching"

    return () => clearTimeout(timer);
  }, [search, allData]);

  // handle loading states
  if (loading)
    return (
      <div className="flex justify-center items-center h-[300px]">
        <ClipLoader color="#9f62f2" size={25} speedMultiplier={0.8} />
      </div>
    );

  if (error) return <ErrorPage />;

  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="font-bold text-4xl mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            All Apps
          </h1>
          <p className="text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Search section */}
        <div className="flex items-center flex-col md:flex-row md:justify-between py-5 ">
          <h1 className="md:text-2xl font-semibold px-2 py-2">
            ({searchApps.length}) App Found
          </h1>
          <div className="relative w-[95%] md:w-[350px]">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="py-1 w-full bg-white rounded-lg px-4 pr-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="search"
              placeholder="🔎 Search here"
            />
          </div>
        </div>

        {/* Search Results */}
        {searchLoading ? (
          <div className="flex justify-center items-center h-[200px]">
            <ClipLoader color="#d70df5" size={145} speedMultiplier={1} />
          </div>
        ) : search.trim() && searchApps.length === 0 ? (
          <div className="w-[300px] mx-auto flex flex-col text-center gap-3">
            <img src={apperror} alt="app error" />
            <p className="text-xl font-bold">Oops! App Not Found</p>
            <button
              onClick={() => setSearch("")}
              className="btn bg-purple-500 text-white text-xl mb-3"
            >
              Go Back
            </button>
          </div>
        ) : (
          <section className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto max-w-[95%] md:max-w-full">
            {searchApps.map((singleData) => (
              <Link key={singleData.id} to={`/appdetails/${singleData.id}`}>
                <div className="card bg-base-100 shadow-sm hover:shadow-lg transition">
                  <figure>
                    <img
                      className="h-[280px] w-full object-cover"
                      src={singleData.image}
                      alt={singleData.title}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{singleData.title}</h2>
                    <div className="card-actions flex justify-between">
                      <div className="bg-green-100 rounded-lg py-1 px-3 flex items-center text-lg font-semibold text-green-700">
                        <AiOutlineDownload />
                        {singleData.downloads}
                      </div>
                      <div className="bg-yellow-100 rounded-lg py-1 px-3 flex items-center text-lg font-semibold text-yellow-600">
                        <AiFillStar />
                        {singleData.ratingAvg}
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
