import { Direction, Piece } from '@/types/app.types';
import { longRangeMoves } from './longRangeMoves';

interface QueenMoves {
  piece: Piece;
  boardPosition: Piece[];
}

export const queenMoves = ({ piece, boardPosition }: QueenMoves) =>
  longRangeMoves({
    piece,
    boardPosition,
    directions: [
      Direction.forward,
      Direction.backward,
      Direction.left,
      Direction.right,
      Direction.forwardLeft,
      Direction.forwardRight,
      Direction.backwardLeft,
      Direction.backwardRight,
    ],
  });
