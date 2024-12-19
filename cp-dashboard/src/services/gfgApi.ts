import { PlatformStatistics } from '../types/profile';

export async function fetchGFGStats(username: string): Promise<PlatformStatistics> {
  try {
    const response = await fetch(`https://auth.geeksforgeeks.org/user/${username}/practice/`);
    const html = await response.text();

    // Use a DOM parser to parse the HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Extract statistics
    const totalSolvedElement = doc.querySelector('span:contains("Problems Solved")');
    const solvedMatch = totalSolvedElement?.nextElementSibling?.textContent?.trim();

    const codingScoreElement = doc.querySelector('span:contains("Coding Score")');
    const ratingMatch = codingScoreElement?.nextElementSibling?.textContent?.trim();

    const rankElement = doc.querySelector('span:contains("Institution Rank")');
    const rankMatch = rankElement?.nextElementSibling?.textContent?.trim();

    return {
      totalSolved: solvedMatch ? parseInt(solvedMatch) : 0,
      rating: ratingMatch ? parseInt(ratingMatch) : undefined,
      rank: rankMatch ? `Rank ${rankMatch}` : undefined,
    };
  } catch (error) {
    console.error('Error fetching GFG stats:', error);
    return {
      totalSolved: 0,
    };
  }
}
