import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 700px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography["2xl"]};
  font-weight: 800;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const StatsSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const StatItem = styled.p`
  font-size: ${({ theme }) => theme.typography.sm};
  margin: ${({ theme }) => theme.spacing.xs} 0;
`;

export const FormSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const HelperText = styled.span`
  font-size: ${({ theme }) => theme.typography.xs};
  color: ${({ theme }) => theme.colors.grayDark};
`;

export const ToggleGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.purple};
  color: white;
  font-weight: 600;
`;

export const CTAButton = styled(Button)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;
