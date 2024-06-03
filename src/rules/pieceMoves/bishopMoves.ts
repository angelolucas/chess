import { Direction, Piece } from '@/types/app.types';
import { longRangeMoves } from './longRangeMoves';

interface BishopMoves {
  piece: Piece;
  boardPosition: Piece[];
}

export const bishopMoves = ({ piece, boardPosition }: BishopMoves) =>
  longRangeMoves({
    piece,
    boardPosition,
    directions: [
      Direction.forwardLeft,
      Direction.forwardRight,
      Direction.backwardLeft,
      Direction.backwardRight,
    ],
  });
