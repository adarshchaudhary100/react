import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface ContestRating {
  date: string;
  rating: number;
  rank: number;
  name: string;
}

interface CodeChefGraphProps {
  contestHistory?: ContestRating[];
}

export function CodeChefGraph({ contestHistory = [] }: CodeChefGraphProps) {
  if (!contestHistory.length) {
    return null;
  }

  const data = contestHistory
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map(contest => ({
      ...contest,
      date: new Date(contest.date).toLocaleDateString()
    }));

  const minRating = Math.min(...data.map(d => d.rating));
  const maxRating = Math.max(...data.map(d => d.rating));
  const domain = [Math.floor(minRating / 100) * 100, Math.ceil(maxRating / 100) * 100];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">CodeChef Rating History</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date"
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />
            <YAxis 
              domain={domain}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white p-3 shadow-lg rounded-lg border">
                      <p className="font-semibold">{data.name}</p>
                      <p className="text-sm">Date: {data.date}</p>
                      <p className="text-sm">Rating: {data.rating}</p>
                      <p className="text-sm">Rank: {data.rank}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              type="monotone"
              dataKey="rating"
              stroke="#2563eb"
              strokeWidth={2}
              dot={{
                stroke: '#1d4ed8',
                strokeWidth: 2,
                r: 4,
                fill: '#white'
              }}
              activeDot={{
                stroke: '#1e40af',
                strokeWidth: 2,
                r: 6,
                fill: '#white'
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}