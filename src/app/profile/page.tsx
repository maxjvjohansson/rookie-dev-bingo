import { getUser } from "@/lib/supabase/getUser";
import { getUserProfile } from "@/lib/supabase/profile";
import Profile from "@/components/Profile/Profile";

export default async function ProfilePage() {
  const user = await getUser();
  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  const profile = await getUserProfile(user.id);
  if (!profile) {
    return <div>Profile not found.</div>;
  }

  return <Profile profile={profile} />;
}
