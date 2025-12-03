"use client";

import logo from "@/assets/images/logo.svg";
import {
  AnimationWrapper,
  CTAButton,
  Headline,
  HeroContent,
  HeroWrapper,
  Logo,
  SecondaryLink,
  Subtext,
} from "./styles";
import BallpitAnimation from "../BallpitAnimation/BallpitAnimation";

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroContent>
        <Logo src={logo} alt="WU24 Logo" />

        <Headline>Track your internship journey with WU24 LIA Bingo</Headline>

        <Subtext>
          Hit your developer milestones, celebrate your wins, and compete with
          your classmates during your internship.
        </Subtext>

        <CTAButton href="/board">Go to My Board</CTAButton>

        <SecondaryLink href="/leaderboard">View Leaderboard →</SecondaryLink>
      </HeroContent>
      <AnimationWrapper>
        <BallpitAnimation
          count={75}
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={true}
        />
      </AnimationWrapper>
    </HeroWrapper>
  );
}
