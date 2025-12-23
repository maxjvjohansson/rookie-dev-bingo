import { DesktopCell, Main, Meta, Name, Rank, RowWrapper } from "./styles";
import { formatDate } from "@/utils/formatDate";
import { LeaderboardRow as Row } from "@/types/leaderboardTypes";
import { getLeaderboardStatus } from "@/utils/getLeaderboardStatus";

interface Props {
  rank: number;
  row: Row;
}

export default function LeaderboardRow({ rank, row }: Props) {
  const status = getLeaderboardStatus(row.distance_to_bingo);
  const medal =
    rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : rank;

  return (
    <RowWrapper>
      <Rank>{medal}</Rank>

      <Main>
        <Name>{row.public_name}</Name>

        <Meta>
          <span>{row.bingo_count} bingos</span>

          <span>
            {status.emoji} {status.text}
          </span>

          {row.last_bingo && (
            <span>Last bingo: {formatDate(row.last_bingo)}</span>
          )}
        </Meta>
      </Main>

      <DesktopCell>
        {status.emoji} {status.text}
      </DesktopCell>

      <DesktopCell>{row.bingo_count}</DesktopCell>

      <DesktopCell>
        {row.last_bingo ? formatDate(row.last_bingo) : "—"}
      </DesktopCell>
    </RowWrapper>
  );
}
