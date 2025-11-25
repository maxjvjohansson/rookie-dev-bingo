"use client";

import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.beige};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Inner = styled.div`
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

/* -------- Desktop links -------- */
const DesktopLinks = styled.div`
  display: none;

  ${({ theme }) => theme.media.md} {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
  }
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

/* -------- Hamburger button -------- */
const Hamburger = styled.button<{ open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }

  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;

  div {
    width: 24px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 2px;
    transition: 0.3s ease;
  }

  div:nth-child(1) {
    transform: ${({ open }) =>
      open ? "rotate(45deg) translate(5px, 5px);" : "none"};
  }
  div:nth-child(2) {
    opacity: ${({ open }) => (open ? 0 : 1)};
  }
  div:nth-child(3) {
    transform: ${({ open }) =>
      open ? "rotate(-45deg) translate(7px, -6px)" : "none"};
  }
`;

/* -------- Mobile menu -------- */
const MobileMenu = styled.div<{ open: boolean }>`
  display: flex;

  ${({ theme }) => theme.media.md} {
    display: none;
  }

  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.beige};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  max-height: ${({ open }) => (open ? "300px" : "0px")};
  overflow: hidden;

  transition: max-height 0.35s ease;
`;

const MobileLink = styled(Link)`
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.md};
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <NavbarContainer>
      <Inner>
        <LogoWrapper>
          <LogoTitle>WU24 Bingo</LogoTitle>
        </LogoWrapper>

        {/* Desktop Nav */}
        <DesktopLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/board">My Board</NavLink>
          <NavLink href="/leaderboard">Leaderboard</NavLink>
        </DesktopLinks>

        {/* Hamburger Icon */}
        <Hamburger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </Hamburger>
      </Inner>

      {/* Mobile Menu */}
      <MobileMenu open={open}>
        <MobileLink href="/" onClick={() => setOpen(false)}>
          Home
        </MobileLink>
        <MobileLink href="/board" onClick={() => setOpen(false)}>
          My Board
        </MobileLink>
        <MobileLink href="/leaderboard" onClick={() => setOpen(false)}>
          Leaderboard
        </MobileLink>
      </MobileMenu>
    </NavbarContainer>
  );
}
