import { PlatformStatistics } from '../types/profile';

const LEETCODE_API = 'https://leetcode-stats-api.herokuapp.com';

export async function fetchLeetCodeStats(username: string): Promise<PlatformStatistics> {
  const response = await fetch(`${LEETCODE_API}/${username}`);
  const data = await response.json();
  
  return {
    totalSolved: data.totalSolved,
    rating: data.rating,
    rank: data.rank
  };
}