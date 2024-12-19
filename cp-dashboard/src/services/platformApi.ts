import { PlatformStatistics } from '../types/profile';

const LEETCODE_API = 'https://leetcode-stats-api.herokuapp.com';
const CODEFORCES_API = 'https://codeforces.com/api';
const GFG_API = 'https://geeksforgeeks.org/api';

export async function fetchLeetCodeStats(username: string): Promise<PlatformStatistics> {
  const response = await fetch(`${LEETCODE_API}/${username}`);
  const data = await response.json();
  
  return {
    totalSolved: data.totalSolved,
    rating: data.rating,
    rank: data.rank
  };
}

export async function fetchCodeforcesStats(username: string): Promise<PlatformStatistics> {
  const response = await fetch(`${CODEFORCES_API}/user.info?handles=${username}`);
  const data = await response.json();
  
  return {
    totalSolved: data.result[0].maxRating || 0,
    rating: data.result[0].rating,
    rank: data.result[0].rank
  };
}

export async function fetchGFGStats(username: string): Promise<PlatformStatistics> {
  const response = await fetch(`${GFG_API}/user/${username}`);
  const data = await response.json();
  
  return {
    totalSolved: data.totalSolved,
    rating: data.rating,
    rank: data.rank
  };
}