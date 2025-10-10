import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const RatingChart = ({ ratings }) => {

    if (!ratings || ratings.length === 0) {
        return <div>No rating data available</div>;
    }

    const chartData = [...ratings].reverse();
    console.log('Chart Data:', chartData);

    return (
        <div className="mt-8 w-full border-b-1 border-gray-300">
            <h3 className="text-lg font-semibold w-4/5   m-auto mb-4">Ratings</h3>
            <div style={{ width: '100%', height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={chartData} layout="vertical"margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
                 <CartesianGrid strokeDasharray="3 3" /> <XAxis type="number" /> <YAxis type="category" dataKey="name" width={70} /><Tooltip /><Bar dataKey="count" fill="#ff7300" /> 
                 </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RatingChart;