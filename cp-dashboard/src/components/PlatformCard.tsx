import React from 'react';
import { Trophy, Star, Code2 } from 'lucide-react';
import { PlatformStats } from '../types/platform';

interface PlatformCardProps {
  stats: PlatformStats;
}

export function PlatformCard({ stats }: PlatformCardProps) {
  const progress = (stats.problemsSolved / stats.totalProblems) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">{stats.platform}</h3>
        {stats.rating && (
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-semibold">{stats.rating}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Trophy className="w-5 h-5 text-green-500" />
          <div>
            <p className="text-sm text-gray-600">Problems Solved</p>
            <p className="font-semibold">{stats.problemsSolved} / {stats.totalProblems}</p>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-green-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {stats.rank && (
          <div className="flex items-center gap-4">
            <Code2 className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">Current Rank</p>
              <p className="font-semibold">{stats.rank}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}