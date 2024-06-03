import { getTargetByDirection } from '@/helpers/getTargetByDirection';
import { Direction, Move, MoveType, Piece } from '@/types/app.types';

interface KnightMoves {
  piece: Piece;
  boardPosition: Piece[];
}

export const knightMoves = ({ piece, boardPosition }: KnightMoves) => {
  const moves: Move[] = [];

  const knightDirections = [
    Direction.knightLeftBackward,
    Direction.knightLeftForward,
    Direction.knightBackwardLeft,
    Direction.knightForwardLeft,
    Direction.knightBackwardRight,
    Direction.knightForwardRight,
    Direction.knightRightBackward,
    Direction.knightRightForwad,
  ];

  knightDirections.forEach((direction) => {
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

  return moves;
};
