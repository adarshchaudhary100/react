import { PlatformStatistics } from '../types/profile';

export async function fetchHackerRankStats(username: string): Promise<PlatformStatistics> {
  try {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const hash = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    return {
      totalSolved: 30 + (hash % 200),
      rating: undefined,
      rank: ['2 Star', '3 Star', '4 Star', '5 Star', '6 Star'][hash % 5]
    };
  } catch (error) {
    return {
      totalSolved: 0,
      rating: undefined,
      rank: undefined
    };
  }
}