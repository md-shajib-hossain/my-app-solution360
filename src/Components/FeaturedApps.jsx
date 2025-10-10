import React from "react";
import useProductsData from "../Hook/useProductsData";
import { Audio } from "react-loader-spinner";
import { Link, Links, NavLink } from "react-router";
import { AiOutlineDownload } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import errordata from "../assets/error-404.png";
const FeaturedApps = () => {
  const { allData, loading, error } = useProductsData();

  if (loading) {
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
  }
  if (error)
    return (
      <div className="w-[300px] mx-auto">
        {" "}
        <img src={errordata} alt="error 404 .png" />
      </div>
    );
  const featuredHomeData = allData.slice(0, 8);

  return (
    <>
      <div className="max-w-[1200px] mx-auto pb-10">
        <div className="text-center py-10">
          <h1 className="font-bold md:text-4xl mb-5 text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
            {" "}
            Trending Apps
          </h1>
          <p className="text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <section className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[95%] md:max-w-full">
          {featuredHomeData.map((singleData) => (
            <Link key={singleData.id} to={`/appdetails/${singleData.id}`}>
              <div className="">
                <div className="card bg-base-100 shadow-sm">
                  <figure>
                    <img
                      className="h-[280px] w-full object-cover overflow-hidden"
                      src={singleData.image}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{singleData.title}</h2>

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
        <NavLink to="/allapps">
          <button className="mb-5 btn max-w-[200px] mx-auto mt-5 grid content-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white w-fit">
            Show All Apps
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default FeaturedApps;
