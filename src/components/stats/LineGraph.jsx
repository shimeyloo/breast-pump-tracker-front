import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function LineGraph(props) {
  let dataPoints = [];

  props.pumpingLog.map((key, val) => {
    let total = parseInt(key.leftVolume, 10) + parseInt(key.rightVolume, 10);
    console.log(key.leftVolume, key.rightVolume, total);
    dataPoints.push({ date: key.dateTime, totalVolume: total });
    return false;
  });

  return (
    <ResponsiveContainer
      className='graph-container container'
      width='40%'
      aspect={2}
    >
      <LineChart
        width={400}
        height={400}
        data={dataPoints}
        margin={{
          top: 10,
          right: 100,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='totalVolume'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineGraph;
