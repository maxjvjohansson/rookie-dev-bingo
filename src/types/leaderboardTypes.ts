export interface LeaderboardRow {
  user_id: string;
  public_name: string;
  bingo_count: number;
  last_bingo: string | null;

  avatar_url: string | null;

  // Progress / board state
  checked_count: number;
  has_bingo: boolean;
  distance_to_bingo: number | null;
}
