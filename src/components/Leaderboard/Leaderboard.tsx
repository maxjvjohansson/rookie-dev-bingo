"use client";

import LeaderboardRow from "./LeaderboardRow";
import {
  Wrapper,
  Title,
  Subtitle,
  Table,
  HeaderRow,
  HeaderCell,
  HeadingWrapper,
} from "./styles";
import { LeaderboardRow as Row } from "@/lib/supabase/leaderboard";

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
          <HeaderCell>
            <span>Bingos</span>
            <span>Last bingo</span>
          </HeaderCell>
        </HeaderRow>

        {leaderboard.map((row, index) => (
          <LeaderboardRow key={row.user_id} rank={index + 1} row={row} />
        ))}
      </Table>
    </Wrapper>
  );
}
