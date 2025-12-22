"use client";

import LeaderboardRow from "./LeaderboardRow";
import {
  Wrapper,
  Title,
  Subtitle,
  Table,
  HeaderRow,
  HeadingWrapper,
  HeaderCell,
} from "./styles";
import { LeaderboardRow as Row } from "@/types/leaderboardTypes";

interface Props {
  leaderboard: Row[];
}

export default function Leaderboard({ leaderboard }: Props) {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Title>Leaderboard</Title>
        <Subtitle>
          Glory, honor, and questionable internship decisions.
        </Subtitle>
      </HeadingWrapper>

      <Table>
        <HeaderRow>
          <span>#</span>
          <span>Name</span>
          <HeaderCell>Current state</HeaderCell>
          <HeaderCell>Bingos</HeaderCell>
          <HeaderCell>Last bingo</HeaderCell>
        </HeaderRow>

        {leaderboard.map((row, index) => (
          <LeaderboardRow key={row.user_id} rank={index + 1} row={row} />
        ))}
      </Table>
    </Wrapper>
  );
}
