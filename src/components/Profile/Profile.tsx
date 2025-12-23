"use client";

import Link from "next/link";
import { UserProfile } from "@/types/userProfileTypes";
import ProfileStats from "./ProfileStats";
import ProfileSettings from "./ProfileSettings";
import { Avatar } from "@/components/Avatar/Avatar";
import {
  Wrapper,
  HeaderWrapper,
  HeadingWrapper,
  Title,
  Subtitle,
  CTAButton,
  ProfileTitleRow,
} from "./styles";
import { Grid3X3 } from "lucide-react";

interface Props {
  profile: UserProfile;
}

export default function Profile({ profile }: Props) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeadingWrapper>
          <ProfileTitleRow>
            <Avatar
              name={profile.public_name}
              imageUrl={profile.avatar_url}
              size={60}
            />
            <Title>Profile</Title>
          </ProfileTitleRow>

          <Subtitle>
            Control how you appear on the leaderboard, and keep your account
            secure.
          </Subtitle>
        </HeadingWrapper>

        <CTAButton as={Link} href="/board">
          <Grid3X3 size={16} />
          Go to your board
        </CTAButton>
      </HeaderWrapper>

      <ProfileStats profile={profile} />
      <ProfileSettings profile={profile} />
    </Wrapper>
  );
}
