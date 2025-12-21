import { createClient } from "./server";
import { BoardTile } from "@/types/boardTypes";

export async function recordBingo(
  userId: string,
  board: BoardTile[]
): Promise<void> {
  const supabase = await createClient();

  await supabase.from("bingo_history").insert({
    user_id: userId,
    board_snapshot: board,
  });

  await supabase
    .from("boards")
    .update({ has_bingo: true })
    .eq("user_id", userId);
}
