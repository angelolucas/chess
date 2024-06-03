import { getTargetByDirection } from '@/helpers/getTargetByDirection';
import { Direction, Move, Piece } from '@/types/app.types';

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
      if (!targetSquare.piece || targetSquare.opponent) {
        moves.push({ square: targetSquare.square });
      }
    }
  });

  // TODO: Castling

  return moves;
};
