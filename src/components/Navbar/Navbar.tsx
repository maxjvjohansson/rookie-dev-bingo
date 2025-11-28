"use client";

import { useState } from "react";
import {
  DesktopLinks,
  Hamburger,
  Inner,
  LogoTitle,
  LogoWrapper,
  MobileLink,
  MobileMenu,
  NavbarContainer,
  NavLink,
} from "./styles";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <NavbarContainer>
      <Inner>
        <LogoWrapper>
          <LogoTitle>WU24 Bingo</LogoTitle>
        </LogoWrapper>

        {/* Desktop Links */}
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

      {/* Mobile Links */}
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
