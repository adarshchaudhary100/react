export interface CodeChefResponse {
    status: string;
    message?: string;
    rating?: number;
    stars?: string;
    highest_rating?: number;
    global_rank?: number;
    country_rank?: number;
    fully_solved?: {
      count: number;
      items: string[];
    };
    partially_solved?: {
      count: number;
      items: string[];
    };
    contest_ratings?: {
      code: string;
      rating: number;
      rank: number;
      name: string;
      end_date: string;
    }[];
  }