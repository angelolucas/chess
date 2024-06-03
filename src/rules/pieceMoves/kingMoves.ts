import { getTargetByDirection } from '@/helpers/getTargetByDirection';
import { Direction, Move, MoveType, Piece } from '@/types/app.types';

interface KingMoves {
  piece: Piece;
  boardPosition: Piece[];
}

export const kingMoves = ({ piece, boardPosition }: KingMoves) => {
  const moves: Move[] = [];

  const directions = [
    Direction.forward,
    Direction.backward,
    Direction.left,
    Direction.right,
    Direction.forwardLeft,
    Direction.forwardRight,
    Direction.backwardLeft,
    Direction.backwardRight,
  ];

  directions.forEach((direction) => {
    const targetSquare = getTargetByDirection({
      direction,
      boardPosition,
      piece,
    });

    if (targetSquare) {
      if (!targetSquare.piece) {
        moves.push({ square: targetSquare.square, type: MoveType.move });
      } else if (targetSquare.opponent) {
        moves.push({ square: targetSquare.square, type: MoveType.capture });
      }
    }
  });

  // TODO: Castling

  return moves;
};
