"use client";

import { useState } from "react";
import { BoardTile } from "@/types/boardTypes";
import {
  BoardWrapper,
  BoardContainer,
  Header,
  HeaderLetter,
  Grid,
  Tile,
  TileText,
} from "./styles";

interface BoardProps {
  initialBoard: BoardTile[];
}

const BINGO_LETTERS: string[] = ["B", "I", "N", "G", "O"];

export default function Board({ initialBoard }: BoardProps) {
  const [board, setBoard] = useState<BoardTile[]>(initialBoard);

  const handleTileClick = (id: string) => {
    setBoard((prevBoard) =>
      prevBoard.map((tile) =>
        tile.id === id ? { ...tile, checked: !tile.checked } : tile
      )
    );
  };

  return (
    <BoardWrapper>
      <BoardContainer>
        <Header>
          {BINGO_LETTERS.map((letter) => (
            <HeaderLetter key={letter}>{letter}</HeaderLetter>
          ))}
        </Header>

        <Grid>
          {board.map((tile) => (
            <Tile
              key={tile.id}
              checked={tile.checked}
              onClick={() => handleTileClick(tile.id)}
            >
              <TileText>{tile.text}</TileText>
            </Tile>
          ))}
        </Grid>
      </BoardContainer>
    </BoardWrapper>
  );
}
