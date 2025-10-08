import React from "react";
import useProductsData from "../Hook/useProductsData";
const FeaturedApps = () => {
  const { allData, loading, error } = useProductsData();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error:Data Not Found</div>;
  const featuredHomeData = allData.slice(0, 8);

  return (
    <div className="max-w-[1200px] mx-auto border">
      <div className="text-center py-10">
        <h1 className="font-bold text-4xl mb-5 text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
          {" "}
          Trending Apps
        </h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredHomeData.map((singleData) => (
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
                <h2 className="card-title">{singleData.title}</h2>

                <div className="card-actions flex justify-between">
                  <div className="badge badge-outline">
                    {singleData.downloads}
                  </div>
                  <div className="badge badge-outline">
                    {singleData.ratingAvg}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FeaturedApps;
