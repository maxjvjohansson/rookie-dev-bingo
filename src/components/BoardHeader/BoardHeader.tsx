"use client";

import {
  HeaderWrapper,
  Title,
  Subtitle,
  Actions,
  HeadingWrapper,
} from "./styles";
import { Button } from "../Board/styles";
import { HelpCircle, RefreshCw } from "lucide-react";

interface Props {
  onShowRules: () => void;
  onNewBoard: () => void;
}

export function BoardHeader({ onShowRules, onNewBoard }: Props) {
  return (
    <HeaderWrapper>
      <HeadingWrapper>
        <Title>Your Bingo Board</Title>
        <Subtitle>
          Track your internship moments and mark them as they happen.
        </Subtitle>
      </HeadingWrapper>

      <Actions>
        <Button onClick={onShowRules}>
          <HelpCircle size={16} />
          How to play
        </Button>
        <Button onClick={onNewBoard}>
          <RefreshCw size={16} />
          New board
        </Button>
      </Actions>
    </HeaderWrapper>
  );
}
