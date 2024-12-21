export interface PlatformProfile {
  username: string;
  platformUrl: string;
}

export interface ProfileData {
  leetcode?: PlatformProfile;
  codeforces?: PlatformProfile;
  geeksforgeeks?: PlatformProfile;
  codechef?: PlatformProfile;
  hackerrank?: PlatformProfile;
  atcoder?: PlatformProfile;
  github?: PlatformProfile;
}

export interface PlatformStatistics {
  totalSolved: number;
  rank?: string;
  rating?: number;
  submissions?: number;
}