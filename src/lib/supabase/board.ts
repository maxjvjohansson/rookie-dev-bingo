import { createClient } from "./server";
import { generateUserBoard } from "@/utils/generateBoard";
import { BoardTile } from "@/types/boardTypes";

export async function getOrCreateUserBoard(userId: string) {
  const supabase = await createClient();

  // Attempt to fetch existing board
  const { data } = await supabase
    .from("boards")
    .select("board")
    .eq("user_id", userId)
    .single();

  if (data?.board) {
    return data.board as BoardTile[];
  }

  // Create new board
  const newBoard: BoardTile[] = generateUserBoard();

  await supabase.from("boards").insert({
    user_id: userId,
    board: newBoard,
    checked_count: 0,
  });

  return newBoard;
}

export async function regenerateBoardForUser(userId: string) {
  const supabase = await createClient();
  const newBoard = generateUserBoard();

  await supabase
    .from("boards")
    .update({
      board: newBoard,
      checked_count: 0,
      updated_at: new Date().toISOString(),
    })
    .eq("user_id", userId);

  return newBoard;
}
