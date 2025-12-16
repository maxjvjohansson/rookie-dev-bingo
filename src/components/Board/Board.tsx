"use client";

import { useState } from "react";
import { updateUserBoard } from "@/lib/supabase/boardClient";
import { BoardTile } from "@/types/boardTypes";
import { useScreenSize } from "@/hooks/useScreenSize";
import { TileModal } from "../TileModal/TileModal";

import {
  BoardWrapper,
  BoardContainer,
  Header,
  HeaderLetter,
  Grid,
  Tile,
  TileText,
  Button,
} from "./styles";

interface Props {
  initialBoard: BoardTile[];
  userId: string;
}

export default function Board({ initialBoard, userId }: Props) {
  const [board, setBoard] = useState(initialBoard);
  const [activeTile, setActiveTile] = useState<BoardTile | null>(null);

  const isMobile: boolean = useScreenSize(768);

  const toggle = async (id: string) => {
    const updated = board.map((t) =>
      t.id === id ? { ...t, checked: !t.checked } : t
    );

    setBoard(updated);

    await updateUserBoard(userId, updated);
  };

  const bingoLetters: string[] = ["B", "I", "N", "G", "O"];

  const handleNewBoardClick = async () => {
    const res = await fetch("/api/board/regenerate", { method: "POST" });
    const newBoard = await res.json();
    setBoard(newBoard);
  };

  const handleTileClick = (tile: BoardTile) => {
    if (isMobile) {
      setActiveTile(tile);
    } else {
      toggle(tile.id);
    }
  };

  return (
    <BoardWrapper>
      <Button onClick={handleNewBoardClick}>Generate New Board</Button>
      <BoardContainer>
        <Header>
          {bingoLetters.map((letter: string) => (
            <HeaderLetter key={letter}>{letter}</HeaderLetter>
          ))}
        </Header>

        <Grid>
          {board.map((t) => (
            <Tile
              key={t.id}
              checked={t.checked}
              onClick={() => handleTileClick(t)}
            >
              <TileText>{t.text}</TileText>
            </Tile>
          ))}
        </Grid>
      </BoardContainer>
      {activeTile && (
        <TileModal
          tile={activeTile}
          onToggle={async () => {
            await toggle(activeTile.id);
            setActiveTile(null);
          }}
          onClose={() => setActiveTile(null)}
        />
      )}
    </BoardWrapper>
  );
}
