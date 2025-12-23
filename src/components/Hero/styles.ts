import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const HeroWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 166.5px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.md}`};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.beige} 0%,
    #f5f1e8 100%
  );
  text-align: center;
  position: relative;
`;

export const HeroContent = styled.div`
  z-index: 2;
  pointer-events: auto;
`;

export const AnimationWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  z-index: 0;
  pointer-events: none;
`;

export const Logo = styled(Image)`
  width: 120px;
  height: auto;

  ${({ theme }) => theme.media.md} {
    width: 150px;
  }
`;

export const Headline = styled.h1`
  font-size: ${({ theme }) => theme.typography["2xl"]};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.2;

  ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography["3xl"]};
    max-width: 700px;
  }
`;

export const Subtext = styled.p`
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.md};
  font-weight: 400;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: 0 auto;

  ${({ theme }) => theme.media.md} {
    flex-direction: row;
    justify-content: center;
    max-width: none;
    width: auto;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const CTAButton = styled(Link)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.purple};
  border: 2px solid ${({ theme }) => theme.colors.purple};
  color: white;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sm};
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};

  ${({ theme }) => theme.media.md} {
    width: auto;
    padding: 1rem 2rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.purpleLight};
    border-color: ${({ theme }) => theme.colors.purpleLight};
  }
`;

export const SecondaryLink = styled(Link)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.purple};
  font-size: ${({ theme }) => theme.typography.sm};
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.colors.purple};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};

  ${({ theme }) => theme.media.md} {
    width: auto;
    padding: 1rem 2rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.purple};
    color: white;
  }
`;

export const AccentSpan = styled.span`
  background: ${({ theme }) => theme.colors.purple};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
`;
