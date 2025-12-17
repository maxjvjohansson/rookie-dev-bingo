import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
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
  max-height: 75vh;
  overflow-y: auto;
  z-index: 1001;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.lg};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sm};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Item = styled.li`
  font-size: ${({ theme }) => theme.typography.xs};
  color: ${({ theme }) => theme.colors.grayDark};
  line-height: 1.4;
`;

export const Footer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
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
