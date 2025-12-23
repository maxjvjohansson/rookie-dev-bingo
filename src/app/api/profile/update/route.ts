import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getUser } from "@/lib/supabase/getUser";

export async function POST(request: NextRequest) {
  const user = await getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  const update: Record<string, any> = {};

  if (typeof body.display_name === "string") {
    update.display_name = body.display_name.trim();
  }

  if (typeof body.username === "string") {
    update.username = body.username.trim();
  }

  if (
    body.public_name_preference === "display_name" ||
    body.public_name_preference === "username"
  ) {
    update.public_name_preference = body.public_name_preference;
  }

  if (Object.keys(update).length === 0) {
    return NextResponse.json(
      { error: "No valid fields provided" },
      { status: 400 }
    );
  }

  const supabase = await createClient();

  const { error } = await supabase
    .from("profiles")
    .update(update)
    .eq("id", user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
