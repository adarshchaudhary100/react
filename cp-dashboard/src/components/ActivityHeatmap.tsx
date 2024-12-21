import React from 'react';
import { Calendar } from 'lucide-react';

interface HeatmapProps {
  data: { date: string; count: number }[];
}

export function ActivityHeatmap({ data }: HeatmapProps) {
  const getIntensityClass = (count: number) => {
    if (count === 0) return 'bg-gray-100';
    if (count <= 2) return 'bg-green-100';
    if (count <= 4) return 'bg-green-300';
    if (count <= 6) return 'bg-green-500';
    return 'bg-green-700';
  };

  const today = new Date();
  const yearAgo = new Date();
  yearAgo.setFullYear(today.getFullYear() - 1);

  // Create a map of dates to counts
  const dateMap = new Map(data.map(d => [d.date, d.count]));

  // Generate all dates for the last year
  const allDates = [];
  for (let d = new Date(yearAgo); d <= today; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0];
    allDates.push({
      date: dateStr,
      count: dateMap.get(dateStr) || 0
    });
  }

  // Group by week for display
  const weeks = [];
  let currentWeek = [];
  
  for (const item of allDates) {
    const date = new Date(item.date);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(item);
  }
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-6 h-6 text-blue-500" />
        <h3 className="text-xl font-bold text-gray-800">Activity Heatmap</h3>
      </div>
      
      <div className="overflow-x-auto">
        <div className="inline-flex gap-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day) => (
                <div
                  key={day.date}
                  className={`w-3 h-3 rounded-sm ${getIntensityClass(day.count)}`}
                  title={`${day.date}: ${day.count} submissions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 flex items-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          Less
          <div className="flex gap-1">
            {['bg-gray-100', 'bg-green-100', 'bg-green-300', 'bg-green-500', 'bg-green-700'].map((cls, i) => (
              <div key={i} className={`w-3 h-3 rounded-sm ${cls}`} />
            ))}
          </div>
          More
        </div>
      </div>
    </div>
  );
}