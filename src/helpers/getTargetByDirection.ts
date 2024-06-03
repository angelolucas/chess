import { Direction, Piece } from '@/types/app.types';
import { getSquareByDirection } from './getSquareByDirection';

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
  const targetPiece = boardPosition.find((item) => item.position === square);

  if (square) {
    return {
      square: square,
      piece: targetPiece,
      opponent: targetPiece && targetPiece?.player !== piece.player,
    };
  }
};
