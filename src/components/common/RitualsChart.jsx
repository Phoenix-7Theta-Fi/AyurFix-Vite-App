import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dummy data
const data = [
  { day: 'Day 1', OilMassage: 1, Meditation: 1, IntermittentFasting: 1, FacialCleanse: 1 },
  { day: 'Day 2', OilMassage: 0, Meditation: 1, IntermittentFasting: 1, FacialCleanse: 1 },
  { day: 'Day 3', OilMassage: 1, Meditation: 1, IntermittentFasting: 0, FacialCleanse: 1 },
  { day: 'Day 4', OilMassage: 1, Meditation: 1, IntermittentFasting: 1, FacialCleanse: 1 },
  { day: 'Day 5', OilMassage: 1, Meditation: 0, IntermittentFasting: 1, FacialCleanse: 0 },
  { day: 'Day 6', OilMassage: 0, Meditation: 1, IntermittentFasting: 1, FacialCleanse: 1 },
  { day: 'Day 7', OilMassage: 1, Meditation: 1, IntermittentFasting: 1, FacialCleanse: 1 },
];

const RitualsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis label={{ value: 'Adherence', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="OilMassage" fill="#8884d8" name="Oil Massage" />
        <Bar dataKey="Meditation" fill="#82ca9d" name="Meditation" />
        <Bar dataKey="IntermittentFasting" fill="#ffc658" name="Intermittent Fasting" />
        <Bar dataKey="FacialCleanse" fill="#ff7300" name="Facial Cleanse" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RitualsChart;
