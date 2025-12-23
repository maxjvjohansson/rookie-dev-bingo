"use client";

import Link from "next/link";
import { UserProfile } from "@/types/userProfileTypes";
import ProfileStats from "./ProfileStats";
import ProfileSettings from "./ProfileSettings";
import { Wrapper, Title, CTAButton } from "./styles";

interface Props {
  profile: UserProfile;
}

export default function Profile({ profile }: Props) {
  return (
    <Wrapper>
      <Title>Profile</Title>

      <ProfileStats profile={profile} />
      <ProfileSettings profile={profile} />

      <CTAButton as={Link} href="/board">
        Go to your board
      </CTAButton>
    </Wrapper>
  );
}
