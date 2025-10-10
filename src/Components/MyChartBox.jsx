import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const MyChartBox = ({ app }) => {
  const data = app.ratings.map((r) => ({
    name: r.name,
    value: r.count,
  }));

  return (
    <>
      <div className=" w-full h-[400px] bg-white shadow-md rounded-lg pb-10 p-5">
        <h2 className="text-2xl font-semibold mb-4"> Ratings of {app.title}</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 10, right: 20, left: 40, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#ff9800"
              barSize={20}
              radius={[5, 5, 5, 5]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="py-5">
        <h1 className="pb-3 text-2xl font-semibold">Description</h1>
        <p className="p-5 rounded-lg bg-white shadow-lg text-lg">
          {app.description}
        </p>
      </div>
    </>
  );
};

export default MyChartBox;
