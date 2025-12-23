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
} from "./styles";

interface Props {
  profile: UserProfile;
}

export default function ProfileSettings({ profile }: Props) {
  const [displayName, setDisplayName] = useState(profile.display_name);
  const [username, setUsername] = useState(profile.username ?? "");
  const [publicPref, setPublicPref] = useState(profile.public_name_preference);
  const [loading, setLoading] = useState(false);

  const saveProfile = async () => {
    setLoading(true);

    await fetch("/api/profile/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        display_name: displayName,
        username,
        public_name_preference: publicPref,
      }),
    });

    setLoading(false);
  };

  return (
    <FormSection>
      <h3>Public profile</h3>

      <FieldGroup>
        <label>Display name</label>
        <Input
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </FieldGroup>

      <FieldGroup>
        <label>Username</label>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        <HelperText>Used for links and leaderboard</HelperText>
      </FieldGroup>

      <ToggleGroup>
        <label>
          <input
            type="radio"
            checked={publicPref === "display_name"}
            onChange={() => setPublicPref("display_name")}
          />
          Show display name
        </label>

        <label>
          <input
            type="radio"
            checked={publicPref === "username"}
            onChange={() => setPublicPref("username")}
          />
          Show username
        </label>
      </ToggleGroup>

      <Button disabled={loading} onClick={saveProfile}>
        {loading ? "Saving…" : "Save changes"}
      </Button>
    </FormSection>
  );
}
