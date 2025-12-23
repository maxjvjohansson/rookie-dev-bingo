"use client";

import Link from "next/link";
import { UserProfile } from "@/types/userProfileTypes";
import ProfileStats from "./ProfileStats";
import ProfileSettings from "./ProfileSettings";
import { Avatar } from "@/components/Avatar/Avatar";
import {
  Wrapper,
  Title,
  CTAButton,
  HeadingWrapper,
  Subtitle,
  HeaderWrapper,
} from "./styles";

interface Props {
  profile: UserProfile;
}

export default function Profile({ profile }: Props) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeadingWrapper>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "8px",
            }}
          >
            <Avatar
              name={profile.public_name}
              imageUrl={profile.avatar_url}
              size={60}
            />
            <Title>Profile</Title>
          </div>
          <Subtitle>
            Control how you appear on the leaderboard, and keep your account
            secure.
          </Subtitle>
        </HeadingWrapper>

        <CTAButton as={Link} href="/board">
          Go to your board
        </CTAButton>
      </HeaderWrapper>

      <ProfileStats profile={profile} />
      <ProfileSettings profile={profile} />
    </Wrapper>
  );
}
