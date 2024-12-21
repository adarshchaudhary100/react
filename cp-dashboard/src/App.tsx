import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import { ActivityGraph } from './components/ActivityGraph';
import { PlatformCard } from './components/PlatformCard';
import { TotalProgress } from './components/TotalProgress';
import { ProfileForm } from './components/ProfileForm';
import { ProfileStats } from './components/ProfileStats';
import { ProfileData } from './types/profile';
import { mockPlatforms, mockActivity } from './data/mockData';

function App() {
  const [profiles, setProfiles] = useState<ProfileData>({});

  const handleProfileSave = (data: ProfileData) => {
    setProfiles(data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">CP Dashboard</h1>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileForm onSave={handleProfileSave} initialData={profiles} />
            <ProfileStats profiles={profiles} />
          </div>

          <TotalProgress platforms={mockPlatforms} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockPlatforms.map((platform) => (
              <PlatformCard key={platform.platform} stats={platform} />
            ))}
          </div>

          <ActivityGraph data={mockActivity} />
        </div>
      </main>
    </div>
  );
}

export default App;