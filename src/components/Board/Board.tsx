"use client";

import { useState } from "react";
import { updateUserBoard } from "@/lib/supabase/boardClient";
import { BoardHeader } from "../BoardHeader/BoardHeader";
import { BoardTile } from "@/types/boardTypes";
import { TileModal } from "../TileModal/TileModal";
import { GameInfoModal } from "../GameInfoModal/GameInfoModal";
import { useScreenSize } from "@/hooks/useScreenSize";

import {
  BoardWrapper,
  BoardContainer,
  Header,
  HeaderLetter,
  Grid,
  Tile,
  TileText,
  MobileTileContent,
} from "./styles";
import { BingoModal } from "../BingoModal/BingoModal";
import { checkForBingo } from "@/utils/checkForBingo";

interface Props {
  initialBoard: BoardTile[];
  userId: string;
}

export default function Board({ initialBoard, userId }: Props) {
  const [board, setBoard] = useState(initialBoard);
  const [activeTile, setActiveTile] = useState<BoardTile | null>(null);
  const [showGameRules, setShowGameRules] = useState(false);
  const [hasBingo, setHasBingo] = useState(false);

  const isMobile: boolean = useScreenSize(768);

  const toggle = async (id: string) => {
    const updated = board.map((t) =>
      t.id === id ? { ...t, checked: !t.checked } : t
    );

    setBoard(updated);
    await updateUserBoard(userId, updated);

    if (checkForBingo(updated)) {
      await fetch("/api/bingo/complete", { method: "POST" });
      setHasBingo(true);
    }
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
      <BoardHeader
        onShowRules={() => setShowGameRules(true)}
        onNewBoard={handleNewBoardClick}
      />
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
              {!isMobile && <TileText>{t.text}</TileText>}

              {isMobile && (
                <MobileTileContent>
                  {t.checked ? "✓" : "Tap to view"}
                </MobileTileContent>
              )}
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
      {showGameRules && (
        <GameInfoModal onClose={() => setShowGameRules(false)} />
      )}
      {hasBingo && (
        <BingoModal
          onNewBoard={async () => {
            setHasBingo(false);
            const res = await fetch("/api/board/regenerate", {
              method: "POST",
            });
            const newBoard = await res.json();
            setBoard(newBoard);
          }}
          onViewLeaderboard={() => {
            window.location.href = "/leaderboard";
          }}
          onClose={() => setHasBingo(false)}
        />
      )}
    </BoardWrapper>
  );
}
