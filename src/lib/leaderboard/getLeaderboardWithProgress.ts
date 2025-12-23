import { createClient } from "@/lib/supabase/server";
import { getDistanceToBingo } from "@/utils/bingoDistance";
import { BoardTile } from "@/types/boardTypes";
import { LeaderboardRow } from "@/types/leaderboardTypes";

export async function getLeaderboardWithProgress(): Promise<LeaderboardRow[]> {
  const supabase = await createClient();

  const [{ data: leaderboard }, { data: boards }] = await Promise.all([
    supabase.from("leaderboard").select("*"),
    supabase.from("boards").select("user_id, board, checked_count, has_bingo"),
  ]);

  if (!leaderboard || !boards) return [];

  const boardMap = new Map(boards.map((b) => [b.user_id, b]));

  const enriched: LeaderboardRow[] = leaderboard.map((row) => {
    const boardData = boardMap.get(row.user_id);
    const board = boardData?.board as BoardTile[] | undefined;

    const distance =
      board && boardData?.checked_count > 0 ? getDistanceToBingo(board) : null;

    return {
      ...row,
      checked_count: boardData?.checked_count ?? 0,
      has_bingo: boardData?.has_bingo ?? false,
      distance_to_bingo: distance,
    };
  });

  enriched.sort((a, b) => {
    if (a.bingo_count !== b.bingo_count) {
      return b.bingo_count - a.bingo_count;
    }

    if (a.distance_to_bingo !== b.distance_to_bingo) {
      if (a.distance_to_bingo === null) return 1;
      if (b.distance_to_bingo === null) return -1;
      return a.distance_to_bingo - b.distance_to_bingo;
    }

    return b.checked_count - a.checked_count;
  });

  return enriched;
}
