import React from 'react';
import { Code, Target, Trophy } from 'lucide-react';
import { PlatformStats } from '../types/platform';

interface TotalProgressProps {
  platforms: PlatformStats[];
}

export function TotalProgress({ platforms }: TotalProgressProps) {
  const totalSolved = platforms.reduce((acc, curr) => acc + curr.problemsSolved, 0);
  const totalProblems = platforms.reduce((acc, curr) => acc + curr.totalProblems, 0);
  const averageProgress = (totalSolved / totalProblems) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-3">
          <Code className="w-6 h-6 text-blue-500" />
          <h3 className="text-lg font-semibold text-gray-800">Total Problems</h3>
        </div>
        <p className="text-3xl font-bold mt-2">{totalSolved}</p>
        <p className="text-gray-600 text-sm">solved out of {totalProblems}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-3">
          <Target className="w-6 h-6 text-green-500" />
          <h3 className="text-lg font-semibold text-gray-800">Progress</h3>
        </div>
        <p className="text-3xl font-bold mt-2">{averageProgress.toFixed(1)}%</p>
        <p className="text-gray-600 text-sm">overall completion</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center gap-3">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <h3 className="text-lg font-semibold text-gray-800">Platforms</h3>
        </div>
        <p className="text-3xl font-bold mt-2">{platforms.length}</p>
        <p className="text-gray-600 text-sm">active platforms</p>
      </div>
    </div>
  );
}