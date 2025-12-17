import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

export const Sheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg}
    ${({ theme }) => theme.radius.lg} 0 0;
  padding: ${({ theme }) => theme.spacing.lg};
  max-height: 70vh;
  overflow-y: auto;

  z-index: 1000;
`;

export const SheetTitle = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.sm};
  font-weight: 400;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const SheetActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const Button = styled.button`
  width: 100%;
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
