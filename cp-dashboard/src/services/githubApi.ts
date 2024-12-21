import { PlatformStatistics } from '../types/profile';

export async function fetchGitHubStats(username: string): Promise<PlatformStatistics> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    
    return {
      totalSolved: data.public_repos || 0, // Using public repos as "solved"
      rating: data.followers,
      rank: data.type // Usually "User" or "Organization"
    };
  } catch (error) {
    return {
      totalSolved: 0,
      rating: undefined,
      rank: undefined
    };
  }
}