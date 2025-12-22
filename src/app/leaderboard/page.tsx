import Leaderboard from "@/components/Leaderboard/Leaderboard";
import { getLeaderboard, LeaderboardRow } from "@/lib/supabase/leaderboard";

export default async function LeaderboardPage() {
  const leaderboard: LeaderboardRow[] = await getLeaderboard();

  return <Leaderboard leaderboard={leaderboard} />;
}
