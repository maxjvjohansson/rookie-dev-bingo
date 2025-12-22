import { LeaderboardRow as Row } from "@/lib/supabase/leaderboard";
import { DesktopCell, Main, Meta, Name, Rank, RowWrapper } from "./styles";
import { formatDate } from "@/utils/formatDate";

interface Props {
  rank: number;
  row: Row;
}

export default function LeaderboardRow({ rank, row }: Props) {
  const medal =
    rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : rank;

  return (
    <RowWrapper>
      <Rank>{medal}</Rank>

      <Main>
        <Name>{row.display_name}</Name>

        <Meta>
          <span>{row.bingo_count} bingos</span>
          {row.last_bingo && (
            <span>Last bingo: {formatDate(row.last_bingo)}</span>
          )}
        </Meta>
      </Main>

      <DesktopCell>{row.bingo_count}</DesktopCell>
      <DesktopCell>
        {row.last_bingo ? formatDate(row.last_bingo) : "—"}
      </DesktopCell>
    </RowWrapper>
  );
}
