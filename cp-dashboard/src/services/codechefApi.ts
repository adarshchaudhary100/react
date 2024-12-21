import { PlatformStatistics } from '../types/profile';
import { CodeChefResponse } from '../types/codechef';

const CODECHEF_API = 'https://codechef-api.vercel.app';

export async function fetchCodeChefStats(username: string): Promise<PlatformStatistics> {
  try {
    const response = await fetch(`${CODECHEF_API}/handle/${username}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    let data: CodeChefResponse;
    
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error('Invalid JSON response:', text);
      throw new Error('Invalid JSON response from CodeChef API');
    }
    
    if (!data || data.status === 'error') {
      throw new Error(data?.message || 'Invalid response from CodeChef API');
    }
    
    return {
      totalSolved: (data.fully_solved?.count || 0) + (data.partially_solved?.count || 0),
      rating: data.rating || 0,
      rank: data.stars || 'Unrated',
      contestHistory: data.contest_ratings?.map(contest => ({
        date: contest.end_date,
        rating: contest.rating,
        rank: contest.rank,
        name: contest.name
      })) || []
    };
  } catch (error) {
    console.error('Error fetching CodeChef stats:', error);
    return {
      totalSolved: 0,
      rating: 0,
      rank: 'Unrated',
      contestHistory: []
    };
  }
}