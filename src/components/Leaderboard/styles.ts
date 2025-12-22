import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.xl};
  font-weight: 700;
`;

export const Subtitle = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.grayDark};
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

/* Desktop header (hidden on mobile) */
export const HeaderRow = styled.div`
  display: none;

  ${({ theme }) => theme.media.md} {
    display: grid;
    grid-template-columns: 40px 1fr 280px;
    padding: 0 ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.sm};
    font-weight: 600;
  }
`;

export const HeaderCell = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

export const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 40px 1fr 120px 160px;
    align-items: center;
  }
`;

export const Rank = styled.div`
  font-size: ${({ theme }) => theme.typography.md};
  font-weight: 600;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.md} {
    gap: 0;
  }
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.sm};
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.typography.xs};
  color: ${({ theme }) => theme.colors.grayDark};

  ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

export const DesktopCell = styled.div`
  display: none;

  ${({ theme }) => theme.media.md} {
    display: block;
    font-size: ${({ theme }) => theme.typography.sm};
    color: ${({ theme }) => theme.colors.grayDark};
    text-align: center;
  }
`;
