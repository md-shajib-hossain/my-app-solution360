import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import apperror from "../assets/App-Error.png";
const InstalledApps = ({ installedList, setInstalledList }) => {
  // console.log(installedList); array pacchi.

  const handleUnInstalled = (id) => {
    const updatedList = installedList.filter((item) => item.id !== id);
    setInstalledList(updatedList);
    localStorage.setItem("restinstalledItem", updatedList);
  };
  if (!installedList || installedList.length === 0) {
    return (
      <div className="w-[300px] mx-auto flex flex-col text-center gap-3">
        <img src={apperror} alt="app error.jpg" />
        <p className="text-xl font-bold">Oops! App Not Found</p>
      </div>
    );
  }

  return (
    <>
      {installedList.map((item) => (
        <div className="max-w-[1200px] mx-auto py-2 px-2 border mb-2 rounded-lg flex items-center justify-between bg-white ">
          <div className="Left flex gap-4">
            <div>
              <img className="w-[150px] h-[120px]" src={item.image} alt="" />
            </div>
            <div>
              <div>
                <h1 className="mb-4 text-xl font-semibold">{item.title}</h1>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center text-lg text-green-800">
                  <span>
                    <AiOutlineDownload />
                  </span>
                  <p>{item.downloads}</p>
                </div>
                <div className="flex items-center text-lg text-yellow-600 ">
                  <span>
                    <AiOutlineDownload />
                  </span>
                  <p>{item.reviews} </p>
                </div>
                <div className="flex items-center text-lg text-blue-800">
                  <span>
                    <AiOutlineDownload />
                  </span>
                  <p className="">
                    {item.size}
                    <span>Mb</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 
      
      
      */}
          <div className="Right">
            <button
              onClick={() => handleUnInstalled(item.id)}
              className="px-4 py-2 rounded-md bg-green-500 text-white text-lg font-normal"
            >
              Uninstall
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default InstalledApps;
