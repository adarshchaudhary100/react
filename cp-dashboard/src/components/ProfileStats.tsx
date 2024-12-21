import React from 'react';
import { Trophy } from 'lucide-react';
import { ProfileData } from '../types/profile';
import { useProfileStats } from '../hooks/useProfileStats';
import { CodeChefGraph } from './CodeChefGraph';
import { ActivityHeatmap } from './ActivityHeatmap';

interface ProfileStatsProps {
  profiles: ProfileData;
}

export function ProfileStats({ profiles }: ProfileStatsProps) {
  const { stats, totalSolved, loading, error } = useProfileStats(profiles);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="text-center py-4">Loading statistics...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="text-red-600 py-4">{error}</div>
      </div>
    );
  }

  // Generate mock activity data for the heatmap
  const generateActivityData = () => {
    const data = [];
    const today = new Date();
    const yearAgo = new Date();
    yearAgo.setFullYear(today.getFullYear() - 1);

    for (let d = new Date(yearAgo); d <= today; d.setDate(d.getDate() + 1)) {
      if (Math.random() > 0.7) { // 30% chance of activity
        data.push({
          date: d.toISOString().split('T')[0],
          count: Math.floor(Math.random() * 8)
        });
      }
    }
    return data;
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <h2 className="text-xl font-bold text-gray-800">Total Problems Solved</h2>
        </div>

        <div className="text-4xl font-bold text-blue-600 mb-6">
          {totalSolved}
        </div>

        <div className="space-y-4">
          {Object.entries(stats).map(([platform, platformStats]) => (
            <div key={platform} className="flex justify-between items-center">
              <span className="capitalize">{platform}</span>
              <div className="flex items-center gap-4">
                <span className="font-medium">{platformStats.totalSolved} solved</span>
                {platformStats.rating !== undefined && platformStats.rating > 0 && (
                  <span className="text-sm text-gray-600">
                    Rating: {platformStats.rating}
                  </span>
                )}
                {platformStats.rank && platformStats.rank !== 'Unrated' && (
                  <span className="text-sm text-gray-600">
                    {platformStats.rank}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {stats.codechef && <ActivityHeatmap data={generateActivityData()} />}

      {stats.codechef?.contestHistory?.length > 0 && (
        <CodeChefGraph contestHistory={stats.codechef.contestHistory} />
      )}
    </div>
  );
}