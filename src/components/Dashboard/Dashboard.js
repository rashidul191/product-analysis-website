import React, { useEffect, useState } from "react";
import {
    Bar,
    BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `data.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Dashboard components</h1>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
          <LineChart width={600} height={300} data={data}>
            <Line dataKey={"revenue"} stroke={"green"}></Line>
            <Line dataKey={"sell"} stroke={"red"} />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey={"month"} />
            <YAxis dataKey={"investment"} />
            <Tooltip></Tooltip>
          </LineChart>
        </div>

        <div className="col">
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"month"} />
          <YAxis dataKey={"investment"}/>
          <Tooltip />
          <Legend />
          <Bar dataKey={"sell"} fill="#8884d8" />
          <Bar dataKey={"revenue"} fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Dashboard;
