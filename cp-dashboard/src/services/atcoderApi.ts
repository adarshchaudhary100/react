import { PlatformStatistics } from '../types/profile';

export async function fetchAtCoderStats(username: string): Promise<PlatformStatistics> {
  try {
    await new Promise(resolve => setTimeout(resolve, 700));
    
    const hash = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    return {
      totalSolved: 20 + (hash % 150),
      rating: 400 + (hash % 2800),
      rank: ['Gray', 'Brown', 'Green', 'Cyan', 'Blue', 'Yellow', 'Orange', 'Red'][hash % 8]
    };
  } catch (error) {
    return {
      totalSolved: 0,
      rating: undefined,
      rank: undefined
    };
  }
}