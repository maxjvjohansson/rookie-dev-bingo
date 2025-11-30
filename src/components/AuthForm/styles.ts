import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography["2xl"]};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.sm};
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.xs};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.md};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayDark};
  }
`;

export const SwitchText = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.sm};
  color: ${({ theme }) => theme.colors.grayDark};
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-weight: 400;

  a {
    color: ${({ theme }) => theme.colors.purple};
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.purpleLight};
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.colors.purpleLight};
    }
  }
`;

export const Button = styled.button`
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

export const InputError = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.typography.xs};
  margin-top: -${({ theme }) => theme.spacing.xxs};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const FormError = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.typography.sm};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
