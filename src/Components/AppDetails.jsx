import React from "react";
import { useParams } from "react-router";
import useProductsData from "../Hook/useProductsData";
import { Audio } from "react-loader-spinner";
import downloadicon from "../assets/icon-downloads.png";
import ratingicon from "../assets/icon-ratings.png";
import reviewicon from "../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  //   console.log(typeof id); string hisabe paisi

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
  if (error) return <div>Error:Data Not Found</div>;
  const app = allData.find((item) => item.id == id); // == ব্যবহার করো, কারণ id string হতে পারে

  if (!app) return <div>App not found</div>;

  return (
    <div className="flex  gap-2 max-w-[1200px] mx-auto  py-5">
      <div className="">
        <img
          className="max-w-[250px] border object-cover rounded-lg mb-2"
          src={app.image}
          alt={app.title}
        />
      </div>
      <section className="gap-5 border space-y-5 ">
        <h1 className="text-3xl font-bold mb-2">{app.title}</h1>
        <h3 className="text-gray-600 mb-4 border-b-2 border-gray-500">
          <h3>
            Developped by -
            <span className="font-bold text-shadow-purple-900">
              {app.companyName}
            </span>
          </h3>
        </h3>

        <div className="flex justify-between items-center gap-10 ">
          <div>
            <img className="h-[30px]" src={downloadicon} alt="" />
            <h2>Downloads</h2>
            <h1 className="text-3xl font-bold">8M</h1>
          </div>
          <div>
            {" "}
            <img className="h-[30px]" src={ratingicon} alt="" />
            <h2>Average Ratings</h2>
            <h1 className="text-3xl font-bold">4.9</h1>
          </div>
          <div>
            {" "}
            <img className="h-[30px]" src={reviewicon} alt="" />
            <h2>Total Reviews</h2>
            <h1 className="text-3xl font-bold">8M</h1>
          </div>
        </div>
        <button className="btn bg-green-500 text-lg text-white">
          Install now <span>(15mb)</span>
        </button>
      </section>
    </div>
  );
};

export default AppDetails;
