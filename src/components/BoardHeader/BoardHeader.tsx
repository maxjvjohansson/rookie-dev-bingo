"use client";

import {
  HeaderWrapper,
  Title,
  Subtitle,
  Actions,
  HeadingWrapper,
} from "./styles";
import { Button } from "../Board/styles";

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
        <Button onClick={onShowRules}>How to play</Button>
        <Button onClick={onNewBoard}>New board</Button>
      </Actions>
    </HeaderWrapper>
  );
}
