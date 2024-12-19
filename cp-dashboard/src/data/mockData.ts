import { PlatformStats, DailyActivity } from '../types/platform';

export const mockPlatforms: PlatformStats[] = [
  {
    platform: 'LeetCode',
    problemsSolved: 250,
    totalProblems: 2500,
    rating: 1850,
    rank: 'Guardian',
    submissions: [10, 15, 8, 12, 20, 18, 14]
  },
  {
    platform: 'CodeForces',
    problemsSolved: 180,
    totalProblems: 1500,
    rating: 1650,
    rank: 'Expert',
    submissions: [8, 12, 15, 10, 9, 11, 13]
  },
  {
    platform: 'GeeksforGeeks',
    problemsSolved: 320,
    totalProblems: 3000,
    rating: 2100,
    rank: 'Advanced',
    submissions: [15, 20, 18, 22, 25, 19, 21]
  }
];

export const mockActivity: DailyActivity[] = [
  { date: '2024-03-01', count: 5 },
  { date: '2024-03-02', count: 8 },
  { date: '2024-03-03', count: 3 },
  { date: '2024-03-04', count: 12 },
  { date: '2024-03-05', count: 7 },
  { date: '2024-03-06', count: 10 },
  { date: '2024-03-07', count: 6 }
];