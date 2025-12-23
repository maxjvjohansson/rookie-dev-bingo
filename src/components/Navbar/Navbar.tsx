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
import Link from "next/link";
import { Home, Trophy, Grid3X3, User, LogOut, LogIn } from "lucide-react";

export default function Navbar({
  user,
  profile,
}: {
  user: any;
  profile: { public_name: string; avatar_url?: string | null } | null;
}) {
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
          <Link href="/">
            <Logo src={logo} alt="Logo" loading="eager" />
          </Link>
        </LeftZone>

        <CenterZone>
          <NavLink href="/">
            <Home size={16} />
            Home
          </NavLink>
          <NavLink href="/leaderboard">
            <Trophy size={16} />
            Leaderboard
          </NavLink>
          {user && (
            <NavLink href="/board">
              <Grid3X3 size={16} />
              My Board
            </NavLink>
          )}
        </CenterZone>

        <RightZone>
          {!user ? (
            <NavLink href="/login">
              <LogIn size={16} />
              Log In
            </NavLink>
          ) : (
            <div style={{ position: "relative" }} ref={dropdownRef}>
              {user && (
                <Avatar
                  name={profile?.public_name ?? user.email}
                  imageUrl={profile?.avatar_url}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
              )}

              {dropdownOpen && (
                <Dropdown>
                  <DropdownItem href="/profile">
                    <User size={16} />
                    Profile
                  </DropdownItem>
                  <DropdownItem href="/board">
                    <Grid3X3 size={16} />
                    My Board
                  </DropdownItem>
                  <DropdownItem href="/" onClick={handleLogout}>
                    <LogOut size={16} />
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
          <Home size={16} />
          Home
        </MobileLink>
        <MobileLink href="/leaderboard" onClick={() => setMobileOpen(false)}>
          <Trophy size={16} />
          Leaderboard
        </MobileLink>

        {user && (
          <MobileLink href="/board" onClick={() => setMobileOpen(false)}>
            <Grid3X3 size={16} />
            My Board
          </MobileLink>
        )}

        {user ? (
          <MobileLink href="/" onClick={handleLogout}>
            <LogOut size={16} />
            Logout
          </MobileLink>
        ) : (
          <MobileLink href="/login" onClick={() => setMobileOpen(false)}>
            <LogIn size={16} />
            Log In
          </MobileLink>
        )}
      </MobileMenu>
    </NavbarContainer>
  );
}
