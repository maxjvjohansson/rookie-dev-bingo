export type TileCategory = "rookieMistakes" | "wins" | "relatable";

export interface BoardTile {
  id: string;
  text: string;
  checked: boolean;
  category: TileCategory;
}

export type UserBoard = BoardTile[];
