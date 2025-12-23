import { BoardTile } from "@/types/boardTypes";
import { Overlay, Sheet, SheetTitle, SheetActions } from "./styles";
import { Button } from "./styles";
import { CheckSquare, XSquare, X } from "lucide-react";

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
            {tile.checked ? (
              <>
                <XSquare size={16} />
                Uncheck
              </>
            ) : (
              <>
                <CheckSquare size={16} />
                Check
              </>
            )}
          </Button>
          <Button onClick={onClose}>
            <X size={16} />
            Close
          </Button>
        </SheetActions>
      </Sheet>
    </>
  );
}
