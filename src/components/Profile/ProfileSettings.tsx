"use client";

import { useState } from "react";
import { UserProfile } from "@/types/userProfileTypes";
import {
  FormSection,
  Input,
  Button,
  FieldGroup,
  ToggleGroup,
  HelperText,
  ToggleOption,
  RadioDot,
} from "./styles";
import { useRouter } from "next/navigation";

interface Props {
  profile: UserProfile;
}

export default function ProfileSettings({ profile }: Props) {
  const [displayName, setDisplayName] = useState(profile.display_name);
  const [username, setUsername] = useState(profile.username ?? "");
  const [publicPref, setPublicPref] = useState(profile.public_name_preference);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const router = useRouter();

  const saveProfile = async () => {
    setLoading(true);
    setSaved(false);

    const res = await fetch("/api/profile/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        display_name: displayName,
        username,
        public_name_preference: publicPref,
      }),
    });

    if (res.ok) {
      setSaved(true);
      router.refresh();

      setTimeout(() => setSaved(false), 2000);
    }

    setLoading(false);
  };

  return (
    <FormSection>
      <h3>Public profile</h3>

      <FieldGroup>
        <label htmlFor="display_name">Display name</label>
        <Input
          id="display_name"
          name="display_name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </FieldGroup>

      <FieldGroup>
        <label htmlFor="username">Username</label>
        <Input
          id="username"
          name="username"
          value={username}
          autoComplete="false"
          onChange={(e) => setUsername(e.target.value)}
        />
        <HelperText>Used for links and leaderboard</HelperText>
      </FieldGroup>

      <ToggleGroup>
        <ToggleOption $active={publicPref === "display_name"}>
          <RadioDot $active={publicPref === "display_name"} />
          Full name
          <input
            type="radio"
            checked={publicPref === "display_name"}
            onChange={() => setPublicPref("display_name")}
          />
        </ToggleOption>

        <ToggleOption $active={publicPref === "username"}>
          <RadioDot $active={publicPref === "username"} />
          Username
          <input
            type="radio"
            checked={publicPref === "username"}
            onChange={() => setPublicPref("username")}
          />
        </ToggleOption>
      </ToggleGroup>

      <Button disabled={loading} onClick={saveProfile}>
        {loading ? "Saving…" : saved ? "Saved ✓" : "Save changes"}
      </Button>
    </FormSection>
  );
}
