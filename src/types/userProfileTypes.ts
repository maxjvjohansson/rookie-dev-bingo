export interface UserProfile {
  user_id: string;

  display_name: string;
  username: string | null;
  avatar_url: string | null;
  public_name_preference: "display_name" | "username";
  public_name: string;

  email: string;

  bingo_count: number;
  last_bingo: string | null;

  checked_count: number;
  has_bingo: boolean;
  distance_to_bingo: number | null;
}
