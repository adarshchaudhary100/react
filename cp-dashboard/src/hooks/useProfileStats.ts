import { useState, useEffect } from 'react';
import { ProfileData, PlatformStatistics } from '../types/profile';
import { fetchLeetCodeStats, fetchCodeforcesStats, fetchGFGStats } from '../services/platformApi';

export function useProfileStats(profiles: ProfileData) {
  const [stats, setStats] = useState<Record<string, PlatformStatistics>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const statsPromises = [];
        
        if (profiles.leetcode?.username) {
          statsPromises.push(
            fetchLeetCodeStats(profiles.leetcode.username)
              .then(stats => ({ platform: 'leetcode', stats }))
          );
        }
        
        if (profiles.codeforces?.username) {
          statsPromises.push(
            fetchCodeforcesStats(profiles.codeforces.username)
              .then(stats => ({ platform: 'codeforces', stats }))
          );
        }
        
        if (profiles.geeksforgeeks?.username) {
          statsPromises.push(
            fetchGFGStats(profiles.geeksforgeeks.username)
              .then(stats => ({ platform: 'geeksforgeeks', stats }))
          );
        }

        const results = await Promise.all(statsPromises);
        const newStats = results.reduce((acc, { platform, stats }) => ({
          ...acc,
          [platform]: stats
        }), {});
        
        setStats(newStats);
      } catch (err) {
        setError('Failed to fetch platform statistics');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [profiles]);

  const totalSolved = Object.values(stats).reduce(
    (total, platformStats) => total + platformStats.totalSolved,
    0
  );

  return { stats, totalSolved, loading, error };
}