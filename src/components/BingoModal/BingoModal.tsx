"use client";

import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import {
  Overlay,
  Modal,
  Title,
  Text,
  Actions,
  PrimaryButton,
  SecondaryButton,
} from "./styles";
import { RotateCcw, Trophy } from "lucide-react";

interface Props {
  onNewBoard: () => void;
  onViewLeaderboard: () => void;
  onClose: () => void;
}

export function BingoModal({ onNewBoard, onViewLeaderboard, onClose }: Props) {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={180}
        recycle={false}
      />

      <Overlay onClick={onClose} />

      <Modal>
        <Title>Congratulations!</Title>
        <Text>You got BINGO!</Text>

        <Actions>
          <PrimaryButton onClick={onNewBoard}>
            <RotateCcw size={16} />
            New board
          </PrimaryButton>
          <SecondaryButton onClick={onViewLeaderboard}>
            <Trophy size={16} />
            View leaderboard
          </SecondaryButton>
        </Actions>
      </Modal>
    </>
  );
}
