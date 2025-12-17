import styled from "styled-components";

export const BoardWrapper = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  ${({ theme }) => theme.media.md} {
    padding: ${({ theme }) => theme.spacing.xl};
  }
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
  max-width: 800px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.pink};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.md};
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const HeaderLetter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography["2xl"]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm};
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const MobileTileContent = styled.span`
  font-size: ${({ theme }) => theme.typography.xs};
  font-weight: 400;
  text-transform: uppercase;
`;

export const TileText = styled.span``;

export const Tile = styled.button<{
  checked: boolean;
}>`
  aspect-ratio: 1;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.grayDark};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme, checked }) => {
    if (checked) {
      return theme.colors.purple;
    }
    return theme.colors.pinkLight;
  }};
  color: ${({ theme, checked }) =>
    checked ? theme.colors.white : theme.colors.black};
  font-size: ${({ theme }) => theme.typography.xs};
  font-weight: ${({ checked }) => (checked ? "600" : "500")};
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
  }
`;
