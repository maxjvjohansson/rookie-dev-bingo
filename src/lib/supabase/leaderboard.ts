import { createClient } from "./client";
import { LeaderboardRow } from "@/types/leaderboardTypes";

export async function getLeaderboard(): Promise<LeaderboardRow[]> {
  const supabase = await createClient();

  const { data } = await supabase.from("leaderboard").select("*");

  return (data ?? []).map((row) => ({
    ...row,
    checked_count: 0,
    has_bingo: false,
    distance_to_bingo: null,
  }));
}
