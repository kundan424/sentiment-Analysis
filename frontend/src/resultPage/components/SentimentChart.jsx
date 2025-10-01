// components/SentimentChart.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Define the colors to match your original chart
const COLORS = {
  positive: "green", 
  neutral: "#C9CBCF",  
  negative: "red", 
};

export default function SentimentChart({ counts }) {
  // Recharts expects an array of objects. We transform your `counts` object into this format.
  const data = [
    { name: "Positive", value: counts["1"] || 0 },
    { name: "Neutral", value: counts["0"] || 0 },
    { name: "Negative", value: counts["-1"] || 0 },
  ];

  // Map data entries to their corresponding colors
  const pieColors = [COLORS.positive, COLORS.neutral, COLORS.negative];

  return (
    // ResponsiveContainer makes the chart adapt to its parent container's size.
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"         // Center X
          cy="50%"         // Center Y
          labelLine={false}
          outerRadius={110}
          fill="#8884d8"
          dataKey="value" // The key in our data object that holds the value
          nameKey="name"    // The key for the label
        >
          {/* Map each data point to a <Cell /> with a specific color */}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieColors[index]} />
          ))}
        </Pie>
        {/* Tooltip shows details on hover */}
        <Tooltip />
        {/* Legend is displayed at the bottom */}
        <Legend layout="horizontal" verticalAlign="bottom" align="center" />
      </PieChart>
    </ResponsiveContainer>
  );
}