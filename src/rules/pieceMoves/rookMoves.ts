import { Direction, Piece } from '@/types/app.types';
import { longRangeMoves } from './longRangeMoves';

interface RookMoves {
  piece: Piece;
  boardPosition: Piece[];
}

export const rookMoves = ({ piece, boardPosition }: RookMoves) =>
  longRangeMoves({
    piece,
    boardPosition,
    directions: [
      Direction.forward,
      Direction.backward,
      Direction.left,
      Direction.right,
    ],
  });
