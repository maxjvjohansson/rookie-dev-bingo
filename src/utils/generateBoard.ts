import { bingoTiles, getCategoryForTile } from "@/data/bingoTiles";
import { BoardTile } from "@/types/boardTypes";

export function generateUserBoard(): BoardTile[] {
  const shuffled: string[] = [...bingoTiles]
    .sort((): number => Math.random() - 0.5)
    .slice(0, 25);

  return shuffled.map((text: string, index: number) => ({
    id: `tile_${index}`,
    text,
    checked: false,
    category: getCategoryForTile(text),
  }));
}
