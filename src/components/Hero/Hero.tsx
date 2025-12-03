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
  AccentSpan,
  ButtonWrapper,
} from "./styles";
import BallpitAnimation from "../BallpitAnimation/BallpitAnimation";

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroContent>
        <Logo src={logo} alt="WU24 Logo" />

        <Headline>
          Track your internship journey with{" "}
          <AccentSpan>WU24 LIA Bingo</AccentSpan>
        </Headline>

        <Subtext>
          Hit your developer milestones, celebrate your wins, and compete with
          your classmates during your internship.
        </Subtext>

        <ButtonWrapper>
          <CTAButton href="/board">Go to My Board</CTAButton>
          <SecondaryLink href="/leaderboard">View Leaderboard →</SecondaryLink>
        </ButtonWrapper>
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
