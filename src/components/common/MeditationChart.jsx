import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy data
const data = [
  { name: 'Jan', Meditation: 10 },
  { name: 'Feb', Meditation: 15 },
  { name: 'Mar', Meditation: 20 },
  { name: 'Apr', Meditation: 25 },
];

const MeditationChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Meditation" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MeditationChart;
