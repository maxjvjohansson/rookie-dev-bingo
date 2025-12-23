import { createClient } from "@/lib/supabase/server";
import { getDistanceToBingo } from "@/utils/bingoDistance";
import { BoardTile } from "@/types/boardTypes";
import { UserProfile } from "@/types/userProfileTypes";

export async function getUserProfile(
  userId: string
): Promise<UserProfile | null> {
  const supabase = await createClient();

  const [
    { data: profile },
    { data: leaderboard },
    { data: board },
    {
      data: { user },
    },
  ] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", userId).single(),
    supabase.from("leaderboard").select("*").eq("user_id", userId).single(),
    supabase
      .from("boards")
      .select("board, checked_count, has_bingo")
      .eq("user_id", userId)
      .single(),
    supabase.auth.getUser(),
  ]);

  if (!profile || !leaderboard || !user) return null;

  const boardData = board?.board as BoardTile[] | undefined;

  const distance =
    boardData && board?.checked_count > 0
      ? getDistanceToBingo(boardData)
      : null;

  return {
    user_id: userId,

    display_name: profile.display_name,
    username: profile.username,
    avatar_url: profile.avatar_url,
    public_name_preference: profile.public_name_preference ?? "display_name",

    email: user.email ?? "",

    bingo_count: leaderboard.bingo_count,
    last_bingo: leaderboard.last_bingo,

    checked_count: board?.checked_count ?? 0,
    has_bingo: board?.has_bingo ?? false,
    distance_to_bingo: distance,
  };
}
