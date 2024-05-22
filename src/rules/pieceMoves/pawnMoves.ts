import { getPieceTarget } from '@/helpers/getPieceTarget';
import { Direction, Piece } from '@/types/app.types';

interface PawnMoves {
  piece: Piece;
  boardPosition: Piece[];
}

export const pawnMoves = ({ piece, boardPosition }: PawnMoves) => {
  const moves = [];

  const squareAhead = getPieceTarget({
    direction: Direction.forward,
    piece,
    boardPosition,
  });

  const squareRight = getPieceTarget({
    direction: Direction.right,
    piece,
    boardPosition,
  });

  if (!squareAhead.piece) {
    moves.push(squareAhead.square);
  }

  if (!squareAhead.piece) {
    moves.push(squareRight.square);
  }

  return moves;
};
