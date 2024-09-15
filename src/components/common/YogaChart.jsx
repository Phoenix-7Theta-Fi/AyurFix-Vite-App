import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy data
const data = [
  { name: 'Jan', Hatha: 30, Vinyasa: 20, Ashtanga: 10 },
  { name: 'Feb', Hatha: 25, Vinyasa: 25, Ashtanga: 15 },
  { name: 'Mar', Hatha: 35, Vinyasa: 30, Ashtanga: 20 },
  { name: 'Apr', Hatha: 40, Vinyasa: 35, Ashtanga: 25 },
];

const YogaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Hatha" fill="#8884d8" />
        <Bar dataKey="Vinyasa" fill="#82ca9d" />
        <Bar dataKey="Ashtanga" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default YogaChart;
