export interface PlatformProfile {
    username: string;
    platformUrl: string;
  }
  
  export interface ProfileData {
    leetcode?: PlatformProfile;
    codeforces?: PlatformProfile;
    geeksforgeeks?: PlatformProfile;
  }
  
  export interface PlatformStatistics {
    totalSolved: number;
    rank?: string;
    rating?: number;
    submissions?: number;
  }