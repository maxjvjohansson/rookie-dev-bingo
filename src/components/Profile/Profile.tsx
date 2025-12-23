"use client";

import Link from "next/link";
import { UserProfile } from "@/types/userProfileTypes";
import ProfileStats from "./ProfileStats";
import ProfileSettings from "./ProfileSettings";
import { Wrapper, Title, CTAButton, HeadingWrapper, Subtitle } from "./styles";

interface Props {
  profile: UserProfile;
}

export default function Profile({ profile }: Props) {
  return (
    <Wrapper>
      <HeadingWrapper>
        <HeadingWrapper>
          <Title>Profile</Title>
          <Subtitle>
            Control how you appear on the leaderboard, and keep your account
            secure.
          </Subtitle>
        </HeadingWrapper>
        <CTAButton as={Link} href="/board">
          Go to your board
        </CTAButton>
      </HeadingWrapper>

      <ProfileStats profile={profile} />
      <ProfileSettings profile={profile} />
    </Wrapper>
  );
}
