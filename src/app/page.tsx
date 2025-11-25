"use client";

import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
`;

export default function HomePage() {
  return <Container></Container>;
}
