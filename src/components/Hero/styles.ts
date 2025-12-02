import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const HeroWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.beige};
  text-align: center;
`;

export const Logo = styled(Image)`
  width: 120px;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  ${({ theme }) => theme.media.md} {
    width: 150px;
  }
`;

export const Headline = styled.h1`
  font-size: ${({ theme }) => theme.typography["2xl"]};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};

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
  font-weight: 300;
`;

export const CTAButton = styled(Link)`
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.purple};
  border: none;
  color: white;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.purpleLight};
  }
`;

export const SecondaryLink = styled(Link)`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sm};

  &:hover {
    text-decoration: underline;
  }
`;
