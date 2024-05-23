import { getSquareByDirection } from '@/helpers/getSquareByDirection';
import { Direction, Piece } from '@/types/app.types';

interface PawnMoves {
  piece: Piece;
  boardPosition: Piece[];
}

export const pawnMoves = ({ piece, boardPosition }: PawnMoves) => {
  const moves = [];

  const squareAhead = getSquareByDirection({
    direction: Direction.forward,
    boardPosition,
    piece,
  });
  const targetTwoForward = getSquareByDirection({
    direction: Direction.pawnTwoForward,
    boardPosition,
    piece,
  });
  const targetForwardLeft = getSquareByDirection({
    direction: Direction.forwardLeft,
    boardPosition,
    piece,
  });
  const targetForwardRight = getSquareByDirection({
    direction: Direction.forwardRight,
    boardPosition,
    piece,
  });

  if (squareAhead && !squareAhead?.piece) {
    moves.push(squareAhead.square);

    if (!piece.moved && targetTwoForward && !targetTwoForward.piece) {
      moves.push(targetTwoForward.square);
    }
  }

  if (targetForwardLeft && targetForwardLeft.enemy) {
    moves.push(targetForwardLeft.square);
  }

  if (targetForwardRight && targetForwardRight.enemy) {
    moves.push(targetForwardRight.square);
  }

  return moves;
};
