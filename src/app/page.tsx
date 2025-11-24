"use client";

import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography["3xl"]};
`;

export default function HomePage() {
  return (
    <Container>
      <Title>WU24 LIA-Bingo</Title>
    </Container>
  );
}
