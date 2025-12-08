import { tiles, bingoTiles } from "@/data/bingoTiles";
import { BoardTile } from "@/types/board";

export function generateUserBoard(): BoardTile[] {
  const shuffled: string[] = [...bingoTiles]
    .sort(() => Math.random() - 0.5)
    .slice(0, 25);

  return shuffled.map((text: string, index: number) => {
    const category = tiles.rookieMistakes.includes(text)
      ? "rookieMistakes"
      : tiles.wins.includes(text)
      ? "wins"
      : "relatable";

    return {
      id: `tile_${index}`,
      text,
      checked: false,
      category,
    };
  });
}
