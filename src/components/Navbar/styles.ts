import styled from "styled-components";
import Link from "next/link";

export const NavbarContainer = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.beige};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Inner = styled.div`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const LogoTitle = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.lg};
  font-weight: 700;
`;

// Desktop Links
export const DesktopLinks = styled.div`
  display: none;

  ${({ theme }) => theme.media.md} {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const NavLink = styled(Link)`
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
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

// Hamburger Menu Button
export const Hamburger = styled.button<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;

  ${({ theme }) => theme.media.md} {
    display: none;
  }

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

// Mobile Links
export const MobileMenu = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.beige};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  max-height: ${({ open }) => (open ? "300px" : "0px")};
  overflow: hidden;
  transition: max-height 0.35s ease;

  ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

export const MobileLink = styled(Link)`
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.md};
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
