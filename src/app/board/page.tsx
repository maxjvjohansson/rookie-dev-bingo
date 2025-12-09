"use client";

import Board from "@/components/Board/Board";
import { generateUserBoard } from "@/utils/generateBoard";
import { useEffect, useState } from "react";
import { BoardTile } from "@/types/boardTypes";

export default function BoardPage() {
  const [board, setBoard] = useState<BoardTile[]>([]);

  useEffect(() => {
    setBoard(generateUserBoard());
  }, []);

  if (board.length === 0) {
    return <div>Loading...</div>;
  }

  return <Board initialBoard={board} />;
}
