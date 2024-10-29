import React from "react";
import "./Charts.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Charts = () => {
  const data = [
    { month: "January", Total: 4000, Loans: 2400 },
    { month: "February", Total: 3000, Loans: 2210 },
    { month: "March", Total: 2000, Loans: 2290 },
    { month: "April", Total: 2780, Loans: 2000 },
    { month: "May", Total: 1890, Loans: 2181 },
    { month: "June", Total: 2390, Loans: 2500 },
    { month: "July", Total: 3490, Loans: 2100 },
  ];

  return (
    <div className="chart">
      <div className="title">Last 7 Months (Loans Processed)</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="Loans" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3"className="chartGrid"  />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
          <Area
            type="monotone"
            dataKey="Loans"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#Loans)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
