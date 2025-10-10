import React, { useState } from "react";
import { useParams } from "react-router";
import useProductsData from "../Hook/useProductsData";
import { Audio } from "react-loader-spinner";
import downloadicon from "../assets/icon-downloads.png";
import ratingicon from "../assets/icon-ratings.png";
import reviewicon from "../assets/icon-review.png";
import errordata from "../assets/error-404.png";
import { ToastContainer, toast } from "react-toastify";
import MyChartBox from "./MyChartBox";
import AppNotFound from "../AppNotFound";

const AppDetails = () => {
  const [isInstalled, setIsInstalled] = useState(false);
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
  if (error)
    return (
      <div className="w-[300px] mx-auto">
        {" "}
        <img src={errordata} alt="error 404 .png" />
      </div>
    );
  const app = allData.find((item) => item.id == id);

  if (!app) {
    return <AppNotFound></AppNotFound>;
  }

  const handleInstallBtn = () => {
    setIsInstalled(true);
    const existingList = JSON.parse(localStorage.getItem("installitem"));
    let updatedList = [];

    if (existingList) {
      const isDuplicate = existingList.some((item) => item.id === app.id);
      if (isDuplicate) {
        return alert("Sorry! Item already exist");
      }
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }

    localStorage.setItem("installitem", JSON.stringify(updatedList));
    toast.success("App Installed Successfully");
  };
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 md:max-w-[1200px] mx-auto w-full py-5 ">
        <div className="mx-auto  ">
          <img
            className="w-[95%] md:h-[250px] md:w-[250px] object-cover rounded-lg mb-2"
            src={app.image}
            alt={app.title}
          />
        </div>
        <section className=" space-y-2 w-full ">
          <h1 className="text-3xl font-bold mb-2">{app.title}</h1>
          <div className="text-gray-600 mb-4 border-b-2 border-gray-500">
            <h2>
              Developped by -
              <span className="font-bold text-shadow-purple-900">
                {app.companyName}
              </span>
            </h2>
          </div>

          <div className="flex md:flex-row mt-10 items-center gap-10 ">
            <div>
              <img className="h-[30px]" src={downloadicon} alt="" />
              <h2>Downloads</h2>
              <h1 className="md:text-3xl font-bold">{app.downloads}</h1>
            </div>
            <div>
              {" "}
              <img className="h-[30px]" src={ratingicon} alt="" />
              <h2>Average Ratings</h2>
              <h1 className="md:text-3xl font-bold">{app.ratingAvg}</h1>
            </div>
            <div>
              {" "}
              <img className="h-[30px]" src={reviewicon} alt="" />
              <h2>Total Reviews</h2>
              <h1 className="md:text-3xl font-bold"> {app.reviews} </h1>
            </div>
          </div>
          <button
            disabled={isInstalled}
            onClick={handleInstallBtn}
            className="btn bg-green-500 text-lg text-white text-center"
          >
            Install now <span>({app.size} mb)</span>
          </button>
        </section>
        {/* Chart */}
      </div>
      <section className="md:max-w-[1200px] mx-auto pb-10">
        <MyChartBox app={app}></MyChartBox>
      </section>
    </>
  );
};

export default AppDetails;
