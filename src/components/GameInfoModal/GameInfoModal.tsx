import { Overlay, Sheet, Title, Footer, Button } from "./styles";
import { InfoSection } from "./InfoSection";

interface Props {
  onClose: () => void;
}

export function GameInfoModal({ onClose }: Props) {
  return (
    <>
      <Overlay onClick={onClose} />
      <Sheet>
        <Title>How WU24 LIA Bingo works</Title>

        <InfoSection
          title="The goal"
          items={[
            "Track real moments during your internship",
            "Mark tiles only when they actually happen",
            "Honesty makes it more fun",
          ]}
        />

        <InfoSection
          title="Playing the game"
          items={[
            "You get a unique bingo board",
            "Tap or click tiles to mark them",
            "Bingo = 5 in a row (any direction)",
          ]}
        />

        <InfoSection
          title="Leaderboard & progression"
          items={[
            "Bingo gives you glory, honor and bragging rights",
            "The leaderboard shows total bingos and checked tiles",
            "After bingo, generate a new board and continue",
          ]}
        />

        <Footer>
          <Button onClick={onClose}>Got it</Button>
        </Footer>
      </Sheet>
    </>
  );
}
