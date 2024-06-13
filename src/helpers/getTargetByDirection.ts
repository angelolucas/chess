import { Direction, Piece } from '@/types/app.types';
import { getSquareByDirection } from './getSquareByDirection';
import { getRowColByPosition } from './getRowColByPosition';

interface getTargetByDirection {
  direction: Direction;
  boardPosition: Piece[];
  piece: Piece;
}

export const getTargetByDirection = ({
  direction,
  boardPosition,
  piece,
}: getTargetByDirection) => {
  const square = getSquareByDirection({
    direction,
    player: piece.player,
    position: piece.position,
  });
  const rowCol = square && getRowColByPosition(square);
  const targetPiece = boardPosition.find((item) => item.position === square);

  if (square && rowCol) {
    return {
      square: square,
      row: rowCol.row,
      col: rowCol.col,
      piece: targetPiece,
      opponent: targetPiece && targetPiece?.player !== piece.player,
    };
  }
};
