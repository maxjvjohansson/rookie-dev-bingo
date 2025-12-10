import { NextResponse } from "next/server";
import { getUser } from "@/lib/supabase/getUser";
import { regenerateBoardForUser } from "@/lib/supabase/board";

export async function POST() {
  const user = await getUser();

  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const newBoard = await regenerateBoardForUser(user.id);

  return NextResponse.json(newBoard);
}
