import React from 'react';
import { Trophy } from 'lucide-react';
import { ProfileData } from '../types/profile';
import { useProfileStats } from '../hooks/useProfileStats';

interface ProfileStatsProps {
  profiles: ProfileData;
}

export function ProfileStats({ profiles }: ProfileStatsProps) {
  const { stats, totalSolved, loading, error } = useProfileStats(profiles);

  if (loading) {
    return <div className="text-center py-4">Loading statistics...</div>;
  }

  if (error) {
    return <div className="text-red-600 py-4">{error}</div>;
  }

  return (
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
              {platformStats.rating && (
                <span className="text-sm text-gray-600">
                  Rating: {platformStats.rating}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}