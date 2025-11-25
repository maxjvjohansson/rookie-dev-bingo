"use client";

import styled from "styled-components";
import Link from "next/link";

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.beige};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const LogoTitle = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.lg};
  font-weight: 700;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NavLink = styled(Link)`
  position: relative;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.md};
  font-weight: 400;
  text-decoration: none;
  padding: 2px 0;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    transition: width 0.3s ease;
  }

  &:hover {
    font-weight: 500;
  }

  &:hover::after {
    width: 100%;
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <Inner>
        <LogoWrapper>
          <LogoTitle>WU24 Bingo</LogoTitle>
        </LogoWrapper>

        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/board">My Board</NavLink>
          <NavLink href="/leaderboard">Leaderboard</NavLink>
        </NavLinks>
      </Inner>
    </NavbarContainer>
  );
}
