import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Dummy data
const data = [
  { name: 'Vata', value: 40 },
  { name: 'Pitta', value: 30 },
  { name: 'Kapha', value: 30 },
];

const COLORS = ['#FFBB28', '#FF8042', '#00C49F'];

const PrakritiChart = () => {
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

export default PrakritiChart;
