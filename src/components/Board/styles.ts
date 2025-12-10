import styled from "styled-components";

export const BoardWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Button = styled.button`
  margin-top: ${({ theme }) => theme.spacing.sm};
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

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.lg};
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const HeaderLetter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography["2xl"]};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.purple};
  padding: ${({ theme }) => theme.spacing.sm};
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.xs};

  ${({ theme }) => theme.media.md} {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const TileText = styled.span``;

export const Tile = styled.button<{
  checked: boolean;
}>`
  aspect-ratio: 1;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 2px solid ${({ theme }) => theme.colors.grayDark};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme, checked }) => {
    if (checked) {
      return theme.colors.purple;
    }
    return theme.colors.white;
  }};
  color: ${({ theme, checked }) =>
    checked ? theme.colors.white : theme.colors.black};
  font-size: ${({ theme }) => theme.typography.xs};
  font-weight: ${({ checked }) => (checked ? "400" : "300")};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  &:active {
    transform: translateY(0);
  }

  ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography.sm};
    padding: ${({ theme }) => theme.spacing.md};
  }
`;
