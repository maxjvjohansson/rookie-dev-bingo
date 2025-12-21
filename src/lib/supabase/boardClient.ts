import { createClient } from "./client";
import { BoardTile } from "@/types/boardTypes";
import { checkForBingo } from "@/utils/checkForBingo";

export async function updateUserBoard(
  userId: string,
  tiles: BoardTile[]
): Promise<boolean> {
  const supabase = createClient();

  const checkedCount: number = tiles.filter((t) => t.checked).length;
  const hasBingo: boolean = checkForBingo(tiles);

  await supabase
    .from("boards")
    .update({
      board: tiles,
      checked_count: checkedCount,
      has_bingo: hasBingo,
      updated_at: new Date().toISOString(),
    })
    .eq("user_id", userId);

  return hasBingo;
}
