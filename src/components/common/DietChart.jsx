import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy data
const data = [
  { name: 'Day 1', Vata: 10, Pitta: 20, Kapha: 15, Calories: 2000, Protein: 100, Carbs: 250, Fats: 70 },
  { name: 'Day 2', Vata: 12, Pitta: 18, Kapha: 17, Calories: 2100, Protein: 110, Carbs: 240, Fats: 80 },
  { name: 'Day 3', Vata: 8, Pitta: 22, Kapha: 14, Calories: 1950, Protein: 105, Carbs: 230, Fats: 75 },
  { name: 'Day 4', Vata: 15, Pitta: 15, Kapha: 20, Calories: 2200, Protein: 120, Carbs: 260, Fats: 85 },
  { name: 'Day 5', Vata: 10, Pitta: 20, Kapha: 18, Calories: 2050, Protein: 115, Carbs: 245, Fats: 78 },
  { name: 'Day 6', Vata: 9, Pitta: 19, Kapha: 16, Calories: 2150, Protein: 118, Carbs: 255, Fats: 80 },
  { name: 'Day 7', Vata: 11, Pitta: 21, Kapha: 19, Calories: 2000, Protein: 112, Carbs: 250, Fats: 82 },
];

const DietChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" label={{ value: 'Ayurvedic Metrics', angle: -90, position: 'insideLeft' }} />
        <YAxis yAxisId="right" orientation="right" label={{ value: 'Traditional Metrics', angle: 90, position: 'insideRight' }} />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="Vata" fill="#8884d8" />
        <Bar yAxisId="left" dataKey="Pitta" fill="#82ca9d" />
        <Bar yAxisId="left" dataKey="Kapha" fill="#ffc658" />
        <Bar yAxisId="right" dataKey="Calories" fill="#ff7300" />
        <Bar yAxisId="right" dataKey="Protein" fill="#387908" />
        <Bar yAxisId="right" dataKey="Carbs" fill="#ff0000" />
        <Bar yAxisId="right" dataKey="Fats" fill="#00ff00" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DietChart;
