import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  ${({ theme }) => theme.media.md} {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const HeaderWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  ${({ theme }) => theme.media.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};

  ${({ theme }) => theme.media.md} {
    align-items: flex-start;
  }
`;

export const ProfileTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography["2xl"]};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.black};
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.sm};
  color: ${({ theme }) => theme.colors.grayDark};
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
  margin-top: ${({ theme }) => theme.spacing.sm};
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

export const ToggleOption = styled.label<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.radius.xxl};
  border: 2px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.purple : theme.colors.gray};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.purpleLightest : "transparent"};
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxs};

  input {
    display: none;
  }
`;

export const RadioDot = styled.span<{ $active: boolean }>`
  width: ${({ theme }) => theme.spacing.sm};
  height: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 2px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.purple : theme.colors.gray};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.purple : "transparent"};
  box-shadow: ${({ $active }) => ($active ? "inset 0 0 0 2px white" : "none")};
`;

export const Button = styled.button`
  margin-top: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.purple};
  border: none;
  color: white;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.purpleLight};
  }
`;

export const CTAButton = styled(Button)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.md};

  ${({ theme }) => theme.media.md} {
    width: auto;
    padding-inline: ${({ theme }) => theme.spacing.sm};
  }
`;

export const AvatarUpload = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  ${({ theme }) => theme.media.sm} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const AvatarPreview = styled.div`
  flex-shrink: 0;
  align-self: center;

  ${({ theme }) => theme.media.sm} {
    align-self: flex-start;
  }
`;

export const AvatarActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;

  ${({ theme }) => theme.media.sm} {
    width: auto;
  }

  > div {
    display: flex;
    gap: ${({ theme }) => theme.spacing.xs};
    flex-wrap: wrap;
  }
`;

export const AvatarButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  margin-top: 0;
  width: auto;
  white-space: nowrap;
`;

export const SecondaryButton = styled(Button)`
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  margin-top: 0;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.colors.gray};
  }
`;

export const ErrorText = styled(HelperText)`
  color: ${({ theme }) => theme.colors.red};
`;
