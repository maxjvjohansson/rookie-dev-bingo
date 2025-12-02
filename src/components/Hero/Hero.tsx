"use client";

import logo from "@/assets/images/logo.svg";
import {
  CTAButton,
  Headline,
  HeroWrapper,
  Logo,
  SecondaryLink,
  Subtext,
} from "./styles";

export default function Hero() {
  return (
    <HeroWrapper>
      <Logo src={logo} alt="WU24 Logo" />

      <Headline>Track your internship journey with WU24 LIA Bingo</Headline>

      <Subtext>
        Hit your developer milestones, celebrate your wins, and compete with
        your classmates during your internship.
      </Subtext>

      <CTAButton href="/board">Go to My Board</CTAButton>

      <SecondaryLink href="/leaderboard">View Leaderboard →</SecondaryLink>
    </HeroWrapper>
  );
}
