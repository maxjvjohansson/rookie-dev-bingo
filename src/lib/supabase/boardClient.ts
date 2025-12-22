import { createClient } from "./client";
import { BoardTile } from "@/types/boardTypes";

export async function updateUserBoard(
  userId: string,
  tiles: BoardTile[]
): Promise<void> {
  const supabase = createClient();

  await supabase
    .from("boards")
    .update({
      board: tiles,
      checked_count: tiles.filter((t: BoardTile): boolean => t.checked).length,
      updated_at: new Date().toISOString(),
    })
    .eq("user_id", userId);
}
