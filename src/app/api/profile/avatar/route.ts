import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getUser } from "@/lib/supabase/getUser";

export async function POST(request: NextRequest) {
  const user = await getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("avatar") as File;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  // Validate file type
  if (!file.type.startsWith("image/")) {
    return NextResponse.json(
      { error: "File must be an image" },
      { status: 400 }
    );
  }

  // Validate file size (e.g., max 5MB)
  if (file.size > 1 * 1024 * 1024) {
    return NextResponse.json(
      { error: "File size must be less than 1MB" },
      { status: 400 }
    );
  }

  const supabase = await createClient();

  // Delete existing avatar if it exists
  const { data: existingProfile } = await supabase
    .from("profiles")
    .select("avatar_url")
    .eq("id", user.id)
    .single();

  if (existingProfile?.avatar_url) {
    // Extract the file path from the URL
    const urlParts = existingProfile.avatar_url.split("/");
    const fileName = urlParts[urlParts.length - 1];
    const folderPath = `public/${user.id}/${fileName}`;

    await supabase.storage.from("avatars").remove([folderPath]);
  }

  // Upload new avatar
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `${user.id}/${fileName}`;

  const { error } = await supabase.storage
    .from("avatars")
    .upload(filePath, file);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Get public URL
  const { data: publicUrlData } = supabase.storage
    .from("avatars")
    .getPublicUrl(filePath);

  const avatarUrl = publicUrlData.publicUrl;

  // Update profile with new avatar URL
  const { error: updateError } = await supabase
    .from("profiles")
    .update({ avatar_url: avatarUrl })
    .eq("id", user.id);

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  return NextResponse.json({ avatarUrl });
}

export async function DELETE() {
  const user = await getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = await createClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select("avatar_url")
    .eq("id", user.id)
    .single();

  if (profile?.avatar_url) {
    const parts = profile.avatar_url.split("/");
    const fileName = parts[parts.length - 1];
    const path = `public/${user.id}/${fileName}`;

    await supabase.storage.from("avatars").remove([path]);
  }

  await supabase
    .from("profiles")
    .update({ avatar_url: null })
    .eq("id", user.id);

  return NextResponse.json({ success: true });
}
