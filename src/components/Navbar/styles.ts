import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

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
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const LeftZone = styled.div`
  display: flex;
  align-items: center;
`;

export const CenterZone = styled.div`
  display: none;

  ${({ theme }) => theme.media.md} {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const RightZone = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Logo = styled(Image)`
  width: ${({ theme }) => theme.spacing.xl};
  height: auto;
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
  font-size: ${({ theme }) => theme.typography.sm};
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 0%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

// Dropdown Items
export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: ${({ theme }) => theme.shadow.md};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  z-index: 1000;
`;

export const DropdownItem = styled(Link)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sm};
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.colors.gray};
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
  font-size: ${({ theme }) => theme.typography.sm};
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
