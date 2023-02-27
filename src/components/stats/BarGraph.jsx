import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function BarGraph(props) {
  const data = [
    { day: "Mon", volume: 10 },
    { day: "Tues", volume: 5 },
    { day: "Wed", volume: 15 },
    { day: "Thur", volume: 11 },
    { day: "Fri", volume: 7 },
    { day: "Sat", volume: 10 },
    { day: "Sun", volume: 25 },
  ];

  return (
    <ResponsiveContainer
      className='graph-container container'
      width='40%'
      aspect={2}
    >
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
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='day' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='volume' fill='#8884d8' />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarGraph;
