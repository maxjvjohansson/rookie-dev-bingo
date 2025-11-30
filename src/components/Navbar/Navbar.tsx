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
import { createClient } from "@/lib/supabase/client";

export default function Navbar({
  user,
  loading,
}: {
  user: any;
  loading: boolean;
}) {
  const [open, setOpen] = useState(false);
  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  return (
    <NavbarContainer>
      <Inner>
        <LogoWrapper>
          <LogoTitle>WU24 Bingo</LogoTitle>
        </LogoWrapper>

        {/* Desktop Links */}
        <DesktopLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/leaderboard">Leaderboard</NavLink>
          {!loading &&
            (user ? (
              <>
                <NavLink href="/board">My Board</NavLink>
                <NavLink href="" onClick={handleLogout}>
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink href="/login">Log In</NavLink>
              </>
            ))}
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
        <MobileLink href="/leaderboard" onClick={() => setOpen(false)}>
          Leaderboard
        </MobileLink>
        {!loading &&
          (user ? (
            <>
              <MobileLink href="/board" onClick={() => setOpen(false)}>
                My Board
              </MobileLink>
              <MobileLink href="/" onClick={handleLogout}>
                Logout
              </MobileLink>
            </>
          ) : (
            <>
              <MobileLink href="/login" onClick={() => setOpen(false)}>
                Log In
              </MobileLink>
            </>
          ))}
      </MobileMenu>
    </NavbarContainer>
  );
}
