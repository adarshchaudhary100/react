import { PlatformStatistics } from '../types/profile';

const CODEFORCES_API = 'https://codeforces.com/api';

export async function fetchCodeforcesStats(username: string): Promise<PlatformStatistics> {
  // Fetch user info
  const userResponse = await fetch(`${CODEFORCES_API}/user.info?handles=${username}`);
  const userData = await userResponse.json();
  
  // Fetch user's submissions
  const submissionsResponse = await fetch(`${CODEFORCES_API}/user.status?handle=${username}`);
  const submissionsData = await submissionsResponse.json();
  
  // Count unique solved problems
  const solvedProblems = new Set();
  submissionsData.result.forEach((submission: any) => {
    if (submission.verdict === 'OK') {
      const problemKey = `${submission.problem.contestId}-${submission.problem.index}`;
      solvedProblems.add(problemKey);
    }
  });
  
  return {
    totalSolved: solvedProblems.size,
    rating: userData.result[0].rating,
    rank: userData.result[0].rank
  };
}