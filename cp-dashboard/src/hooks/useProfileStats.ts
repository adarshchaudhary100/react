import { useState, useEffect } from 'react';
import { ProfileData, PlatformStatistics } from '../types/profile';
import {
  fetchLeetCodeStats,
  fetchCodeforcesStats,
  fetchGFGStats,
  fetchCodeChefStats,
  fetchHackerRankStats,
  fetchAtCoderStats,
  fetchGitHubStats
} from '../services/platformApi';

export function useProfileStats(profiles: ProfileData) {
  const [stats, setStats] = useState<Record<string, PlatformStatistics>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      setError(null);
      
      const platformFetchers = {
        leetcode: fetchLeetCodeStats,
        codeforces: fetchCodeforcesStats,
        geeksforgeeks: fetchGFGStats,
        codechef: fetchCodeChefStats,
        hackerrank: fetchHackerRankStats,
        atcoder: fetchAtCoderStats,
        github: fetchGitHubStats
      };
      
      try {
        const results = await Promise.allSettled(
          Object.entries(profiles)
            .filter(([, profile]) => profile?.username)
            .map(async ([platform, profile]) => {
              const stats = await platformFetchers[platform as keyof typeof platformFetchers](profile!.username);
              return { platform, stats };
            })
        );
        
        const newStats = results.reduce((acc, result) => {
          if (result.status === 'fulfilled') {
            const { platform, stats } = result.value;
            return { ...acc, [platform]: stats };
          }
          return acc;
        }, {});
        
        setStats(newStats);
        
        if (results.every(result => result.status === 'rejected')) {
          setError('Failed to fetch statistics from all platforms');
        }
      } catch (err) {
        setError('Failed to fetch platform statistics');
      } finally {
        setLoading(false);
      }
    };

    if (Object.keys(profiles).length > 0) {
      fetchStats();
    } else {
      setStats({});
      setLoading(false);
    }
  }, [profiles]);

  const totalSolved = Object.values(stats).reduce(
    (total, platformStats) => total + platformStats.totalSolved,
    0
  );

  return { stats, totalSolved, loading, error };
}