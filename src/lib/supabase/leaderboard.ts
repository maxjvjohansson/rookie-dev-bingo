import { createClient } from "./client";

export interface LeaderboardRow {
  user_id: string;
  display_name: string;
  bingo_count: number;
  last_bingo: string | null;
}

export async function getLeaderboard(): Promise<LeaderboardRow[]> {
  const supabase = await createClient();

  const { data, error } = await supabase.from("leaderboard").select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data as LeaderboardRow[];
}
