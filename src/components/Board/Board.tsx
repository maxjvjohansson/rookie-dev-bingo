"use client";

import { useState } from "react";
import { updateUserBoard } from "@/lib/supabase/boardClient";
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

interface Props {
  initialBoard: BoardTile[];
  userId: string;
}

export default function Board({ initialBoard, userId }: Props) {
  const [board, setBoard] = useState(initialBoard);

  const toggle = async (id: string) => {
    const updated = board.map((t) =>
      t.id === id ? { ...t, checked: !t.checked } : t
    );

    setBoard(updated);

    await updateUserBoard(userId, updated);
  };

  const bingoLetters: string[] = ["B", "I", "N", "G", "O"];

  return (
    <BoardWrapper>
      <BoardContainer>
        <Header>
          {bingoLetters.map((letter: string) => (
            <HeaderLetter key={letter}>{letter}</HeaderLetter>
          ))}
        </Header>

        <Grid>
          {board.map((t) => (
            <Tile key={t.id} checked={t.checked} onClick={() => toggle(t.id)}>
              <TileText>{t.text}</TileText>
            </Tile>
          ))}
        </Grid>
      </BoardContainer>
    </BoardWrapper>
  );
}
