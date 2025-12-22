import Leaderboard from "@/components/Leaderboard/Leaderboard";
import { getLeaderboardWithProgress } from "@/lib/leaderboard/getLeaderboardWithProgress";
import { LeaderboardRow } from "@/types/leaderboardTypes";

export default async function LeaderboardPage() {
  const leaderboard: LeaderboardRow[] = await getLeaderboardWithProgress();

  return <Leaderboard leaderboard={leaderboard} />;
}
