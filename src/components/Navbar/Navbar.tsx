"use client";

import { useState, useRef, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  NavbarContainer,
  Inner,
  LeftZone,
  CenterZone,
  RightZone,
  Logo,
  Hamburger,
  MobileMenu,
  MobileLink,
  Dropdown,
  DropdownItem,
  NavLink,
} from "./styles";
import { Avatar } from "@/components/Avatar/Avatar";
import logo from "@/assets/images/logo.svg";

export default function Navbar({ user }: { user: any }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  // Close dropdown on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <NavbarContainer>
      {/* Desktop Nav */}
      <Inner>
        <LeftZone>
          <Logo src={logo} alt="Logo" />
        </LeftZone>

        <CenterZone>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/leaderboard">Leaderboard</NavLink>
          {user && <NavLink href="/board">My Board</NavLink>}
        </CenterZone>

        <RightZone>
          {!user ? (
            <NavLink href="/login">Log In</NavLink>
          ) : (
            <div style={{ position: "relative" }} ref={dropdownRef}>
              <Avatar
                name={user.user_metadata?.fullName ?? user.email}
                imageUrl={user.user_metadata?.avatar_url}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />

              {dropdownOpen && (
                <Dropdown>
                  <DropdownItem href="/profile">Profile</DropdownItem>
                  <DropdownItem href="/board">My Board</DropdownItem>
                  <DropdownItem href="/" onClick={handleLogout}>
                    Logout
                  </DropdownItem>
                </Dropdown>
              )}
            </div>
          )}

          <Hamburger
            open={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div />
            <div />
            <div />
          </Hamburger>
        </RightZone>
      </Inner>

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen}>
        <MobileLink href="/" onClick={() => setMobileOpen(false)}>
          Home
        </MobileLink>
        <MobileLink href="/leaderboard" onClick={() => setMobileOpen(false)}>
          Leaderboard
        </MobileLink>

        {user && (
          <MobileLink href="/board" onClick={() => setMobileOpen(false)}>
            My Board
          </MobileLink>
        )}

        {user ? (
          <MobileLink href="/" onClick={handleLogout}>
            Logout
          </MobileLink>
        ) : (
          <MobileLink href="/login" onClick={() => setMobileOpen(false)}>
            Log In
          </MobileLink>
        )}
      </MobileMenu>
    </NavbarContainer>
  );
}
