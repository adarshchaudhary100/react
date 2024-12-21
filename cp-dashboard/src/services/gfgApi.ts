import { PlatformStatistics } from '../types/profile';

// Since we can't access GFG directly due to CORS, we'll use a mock implementation
export async function fetchGFGStats(username: string): Promise<PlatformStatistics> {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate consistent mock data based on username
    const hash = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    return {
      totalSolved: 100 + (hash % 400), // Random but consistent number between 100-500
      rating: 1000 + (hash % 2000), // Random but consistent rating between 1000-3000
      rank: `Rank ${1 + (hash % 1000)}` // Random but consistent rank between 1-1000
    };
  } catch (error) {
    console.warn('Using fallback data for GFG stats');
    return {
      totalSolved: 0,
      rating: undefined,
      rank: undefined
    };
  }
}