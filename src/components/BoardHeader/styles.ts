import styled from "styled-components";

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

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;
