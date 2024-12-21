import React, { useState } from 'react';
import { Link } from 'lucide-react';
import { ProfileData } from '../types/profile';

interface ProfileFormProps {
  onSave: (data: ProfileData) => void;
  initialData?: ProfileData;
}

const PLATFORMS = {
  leetcode: 'LeetCode',
  codeforces: 'CodeForces',
  geeksforgeeks: 'GeeksforGeeks',
  codechef: 'CodeChef',
  hackerrank: 'HackerRank',
  atcoder: 'AtCoder',
  github: 'GitHub'
};

export function ProfileForm({ onSave, initialData }: ProfileFormProps) {
  const [formData, setFormData] = useState<ProfileData>(initialData || {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleInputChange = (platform: keyof ProfileData, username: string) => {
    setFormData(prev => ({
      ...prev,
      [platform]: {
        username,
        platformUrl: getPlatformUrl(platform, username)
      }
    }));
  };

  const getPlatformUrl = (platform: string, username: string) => {
    const urls: Record<string, string> = {
      leetcode: `https://leetcode.com/${username}`,
      codeforces: `https://codeforces.com/profile/${username}`,
      geeksforgeeks: `https://auth.geeksforgeeks.org/user/${username}`,
      codechef: `https://www.codechef.com/users/${username}`,
      hackerrank: `https://www.hackerrank.com/${username}`,
      atcoder: `https://atcoder.jp/users/${username}`,
      github: `https://github.com/${username}`
    };
    return urls[platform] || '';
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Platform Profiles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(PLATFORMS).map(([platform, label]) => (
          <div key={platform} className="flex items-center gap-4">
            <Link className="w-5 h-5 text-blue-500" />
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                {label} Username
              </label>
              <input
                type="text"
                value={formData[platform as keyof ProfileData]?.username || ''}
                onChange={(e) => handleInputChange(platform as keyof ProfileData, e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder={`Enter your ${label} username`}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Save Profiles
      </button>
    </form>
  );
}