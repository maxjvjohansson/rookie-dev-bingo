import { NextResponse } from "next/server";
import { getUser } from "@/lib/supabase/getUser";
import { recordBingo } from "@/lib/supabase/bingo";
import { createClient } from "@/lib/supabase/server";

export async function POST() {
  const user = await getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = await createClient();

  const { data } = await supabase
    .from("boards")
    .select("board, has_bingo")
    .eq("user_id", user.id)
    .single();

  if (!data || data.has_bingo) {
    return NextResponse.json({ ok: false });
  }

  await recordBingo(user.id, data.board);

  return NextResponse.json({ ok: true });
}
