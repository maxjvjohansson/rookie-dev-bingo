"use client";

import { useState, useRef } from "react";
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
  AvatarUpload,
  AvatarPreview,
} from "./styles";
import { useRouter } from "next/navigation";
import { Avatar } from "@/components/Avatar/Avatar";

interface Props {
  profile: UserProfile;
}

export default function ProfileSettings({ profile }: Props) {
  const [displayName, setDisplayName] = useState(profile.display_name);
  const [username, setUsername] = useState(profile.username ?? "");
  const [publicPref, setPublicPref] = useState(profile.public_name_preference);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [avatarLoading, setAvatarLoading] = useState(false);
  const [avatarError, setAvatarError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const uploadAvatar = async (file: File) => {
    setAvatarLoading(true);
    setAvatarError(null);

    const formData = new FormData();
    formData.append("avatar", file);

    const res = await fetch("/api/profile/avatar", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      router.refresh();
    } else {
      const error = await res.json();
      setAvatarError(error.error || "Failed to upload avatar");
    }

    setAvatarLoading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadAvatar(file);
    }
  };

  return (
    <FormSection>
      <h3>Avatar</h3>

      <FieldGroup>
        <AvatarUpload>
          <AvatarPreview>
            <Avatar
              name={profile.public_name}
              imageUrl={profile.avatar_url}
              size={80}
            />
          </AvatarPreview>
          <div>
            <Button
              disabled={avatarLoading}
              onClick={() => fileInputRef.current?.click()}
              style={{ marginBottom: "8px" }}
            >
              {avatarLoading ? "Uploading…" : "Change avatar"}
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <HelperText>
              Upload a profile picture. Max 1MB, JPG/PNG/WebP.
            </HelperText>
            {avatarError && (
              <HelperText style={{ color: "red" }}>{avatarError}</HelperText>
            )}
          </div>
        </AvatarUpload>
      </FieldGroup>

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
