import getRowColByPosition from '@/helpers/getRowColByPosition';
import { getTargetByDirection } from '@/helpers/getTargetByDirection';
import { Direction, Piece, PieceType, Player } from '@/types/app.types';

interface PawnMoves {
  piece: Piece;
  boardPosition: Piece[];
  lastMove?: {
    piece: Piece;
    move: number;
  };
}

export const pawnMoves = ({ piece, boardPosition, lastMove }: PawnMoves) => {
  const moves = [];

  const squareAhead = getTargetByDirection({
    direction: Direction.forward,
    boardPosition,
    piece,
  });
  const squareTwoForward = getTargetByDirection({
    direction: Direction.pawnTwoForward,
    boardPosition,
    piece,
  });
  const squareForwardLeft = getTargetByDirection({
    direction: Direction.forwardLeft,
    boardPosition,
    piece,
  });
  const squareForwardRight = getTargetByDirection({
    direction: Direction.forwardRight,
    boardPosition,
    piece,
  });

  if (squareAhead && !squareAhead?.piece) {
    moves.push(squareAhead.square);

    if (!piece.moved && squareTwoForward && !squareTwoForward.piece) {
      moves.push(squareTwoForward.square);
    }
  }

  if (squareForwardLeft && squareForwardLeft.opponent) {
    moves.push(squareForwardLeft.square);
  }

  if (squareForwardRight && squareForwardRight.opponent) {
    moves.push(squareForwardRight.square);
  }

  // En passant
  if (lastMove) {
    const { row } = getRowColByPosition(piece.position);
    const squareLeft = getTargetByDirection({
      direction: Direction.left,
      boardPosition,
      piece,
    });
    const squareRight = getTargetByDirection({
      direction: Direction.right,
      boardPosition,
      piece,
    });

    const correctColumn =
      (piece.player === Player.white && row === 4) ||
      (piece.player === Player.black && row === 5);
    const lastMoveIsPawn = lastMove.piece.type === PieceType.pawn;
    const lastMovePawnMovedTwoSquares =
      Math.abs(lastMove.piece.position - lastMove.move) === 20;
    const lastMovePawnRight = squareRight?.piece?.position === lastMove.move;
    const lastMovePawnLeft = squareLeft?.piece?.position === lastMove.move;

    if (correctColumn && lastMoveIsPawn && lastMovePawnMovedTwoSquares) {
      if (lastMovePawnLeft && squareForwardLeft) {
        moves.push(squareForwardLeft.square);
      }
      if (lastMovePawnRight && squareForwardRight) {
        moves.push(squareForwardRight.square);
      }
    }
  }

  return moves;
};
