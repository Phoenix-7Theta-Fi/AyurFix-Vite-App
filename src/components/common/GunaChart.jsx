import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Dummy data
const data = [
  { name: 'Sattva', value: 50 },
  { name: 'Rajas', value: 30 },
  { name: 'Tamas', value: 20 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const GunaChart = () => {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default GunaChart;
