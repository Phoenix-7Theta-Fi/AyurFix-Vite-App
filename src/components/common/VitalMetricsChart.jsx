import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy data
const data = [
  { name: 'Day 1', HeartRate: 72, Steps: 5000, Calories: 2000 },
  { name: 'Day 2', HeartRate: 75, Steps: 6000, Calories: 2100 },
  { name: 'Day 3', HeartRate: 70, Steps: 5500, Calories: 1950 },
  { name: 'Day 4', HeartRate: 68, Steps: 7000, Calories: 2200 },
  { name: 'Day 5', HeartRate: 73, Steps: 6500, Calories: 2050 },
  { name: 'Day 6', HeartRate: 71, Steps: 7200, Calories: 2150 },
  { name: 'Day 7', HeartRate: 69, Steps: 6800, Calories: 2000 },
];

const VitalMetricsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" label={{ value: 'Steps', angle: -90, position: 'insideLeft' }} />
        <YAxis yAxisId="right" orientation="right" label={{ value: 'Calories', angle: 90, position: 'insideRight' }} />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="Steps" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line yAxisId="right" type="monotone" dataKey="Calories" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VitalMetricsChart;
