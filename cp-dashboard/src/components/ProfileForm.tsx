import React, { useState } from 'react';
import { Link } from 'lucide-react';
import { ProfileData } from '../types/profile';

interface ProfileFormProps {
  onSave: (data: ProfileData) => void;
  initialData?: ProfileData;
}

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
    const urls = {
      leetcode: `https://leetcode.com/${username}`,
      codeforces: `https://codeforces.com/profile/${username}`,
      geeksforgeeks: `https://auth.geeksforgeeks.org/user/${username}`
    };
    return urls[platform as keyof typeof urls] || '';
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Platform Profiles</h2>
      
      <div className="space-y-4">
        {['leetcode', 'codeforces', 'geeksforgeeks'].map((platform) => (
          <div key={platform} className="flex items-center gap-4">
            <Link className="w-5 h-5 text-blue-500" />
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {platform} Username
              </label>
              <input
                type="text"
                value={formData[platform as keyof ProfileData]?.username || ''}
                onChange={(e) => handleInputChange(platform as keyof ProfileData, e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder={`Enter your ${platform} username`}
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