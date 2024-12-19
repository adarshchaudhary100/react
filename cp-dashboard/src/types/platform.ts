export interface PlatformStats {
    platform: string;
    problemsSolved: number;
    totalProblems: number;
    rating?: number;
    rank?: string;
    submissions: number[];
  }
  
  export interface DailyActivity {
    date: string;
    count: number;
  }