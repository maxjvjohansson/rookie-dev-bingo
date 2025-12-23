import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1000;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  width: 90%;
  max-width: 420px;
  text-align: center;
  z-index: 1001;
  box-shadow: ${({ theme }) => theme.shadow.md};

  animation: pop 0.25s ease;

  @keyframes pop {
    from {
      transform: translate(-50%, -55%) scale(0.95);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.typography.sm};
  color: ${({ theme }) => theme.colors.grayDark};
`;

export const Actions = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const PrimaryButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.purple};
  border: 2px solid ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sm};
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};

  &:hover {
    background: ${({ theme }) => theme.colors.purpleLight};
    border-color: ${({ theme }) => theme.colors.purpleLight};
  }
`;

export const SecondaryButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm};
  background: transparent;
  color: ${({ theme }) => theme.colors.purple};
  font-size: ${({ theme }) => theme.typography.sm};
  font-weight: 600;
  white-space: nowrap;
  border: 2px solid ${({ theme }) => theme.colors.purple};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};

  &:hover {
    background: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
  }
`;
