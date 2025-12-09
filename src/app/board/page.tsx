import Board from "@/components/Board/Board";
import { getUser } from "@/lib/supabase/getUser";
import { getOrCreateUserBoard } from "@/lib/supabase/board";
import { BoardTile } from "@/types/boardTypes";
import { redirect } from "next/navigation";

export default async function BoardPage() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const board: BoardTile[] = await getOrCreateUserBoard(user.id);

  return <Board initialBoard={board} userId={user.id} />;
}
