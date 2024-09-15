import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy data
const data = [
  { name: 'Jan', Calories: 2000, Strength: 80, Distance: 50 },
  { name: 'Feb', Calories: 2100, Strength: 85, Distance: 55 },
  { name: 'Mar', Calories: 1950, Strength: 90, Distance: 60 },
  { name: 'Apr', Calories: 2200, Strength: 95, Distance: 65 },
];

const WorkoutChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" label={{ value: 'Calories', angle: -90, position: 'insideLeft' }} />
        <YAxis yAxisId="right" orientation="right" label={{ value: 'Distance (km)', angle: 90, position: 'insideRight' }} />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="Calories" stroke="#8884d8" />
        <Line yAxisId="right" type="monotone" dataKey="Distance" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WorkoutChart;
