import { BoardTile } from "@/types/boardTypes";
import { Overlay, Sheet, SheetTitle, SheetActions } from "./styles";
import { Button } from "./styles";

interface Props {
  tile: BoardTile;
  onToggle: () => void;
  onClose: () => void;
}

export function TileModal({ tile, onToggle, onClose }: Props) {
  return (
    <>
      <Overlay onClick={onClose} />
      <Sheet>
        <SheetTitle>{tile.text}</SheetTitle>

        <SheetActions>
          <Button onClick={onToggle}>
            {tile.checked ? "Uncheck" : "Check"}
          </Button>
          <Button onClick={onClose}>Close</Button>
        </SheetActions>
      </Sheet>
    </>
  );
}
