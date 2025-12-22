import { BoardTile } from "@/types/boardTypes";
import { BINGO_PATTERNS } from "@/data/bingoPatterns";

/**
 * Returns how many tiles are left to complete
 * the closest bingo pattern.
 *
 * 0 = bingo
 * 5 = very far
 */

export function getDistanceToBingo(board: BoardTile[]): number {
  if (!board || board.length !== 25) return 5;

  const distances: number[] = BINGO_PATTERNS.map((pattern) => {
    return pattern.filter((index) => !board[index]?.checked).length;
  });

  return Math.min(...distances);
}
