import { BoardTile } from "@/types/boardTypes";
import { BINGO_PATTERNS } from "@/data/bingoPatterns";

export function checkForBingo(board: BoardTile[]): boolean {
  return BINGO_PATTERNS.some((pattern) =>
    pattern.every((index) => board[index]?.checked)
  );
}
