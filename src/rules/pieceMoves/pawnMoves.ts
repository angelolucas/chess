import getRowColByPosition from '@/helpers/getRowColByPosition';
import { getTargetByDirection } from '@/helpers/getTargetByDirection';
import {
  Direction,
  Move,
  MoveType,
  Piece,
  PieceType,
  Player,
} from '@/types/app.types';

interface PawnMoves {
  piece: Piece;
  boardPosition: Piece[];
  lastMove?: {
    piece: Piece;
    move: Move;
  };
}

export const pawnMoves = ({ piece, boardPosition, lastMove }: PawnMoves) => {
  let moves: Move[] = [];

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

  // Move forward
  if (squareAhead && !squareAhead?.piece) {
    moves.push({ square: squareAhead.square });

    if (!piece.moved && squareTwoForward && !squareTwoForward.piece) {
      moves.push({ square: squareTwoForward.square });
    }
  }

  // Capture
  if (squareForwardLeft && squareForwardLeft.opponent) {
    moves.push({ square: squareForwardLeft.square });
  }

  if (squareForwardRight && squareForwardRight.opponent) {
    moves.push({ square: squareForwardRight.square });
  }

  // Promotion
  moves = moves.map((move) => {
    const whitePromotion =
      piece.player === Player.white &&
      getRowColByPosition(move.square).row === 1;
    const blackPromotion =
      piece.player === Player.black &&
      getRowColByPosition(move.square).row === 8;

    if (whitePromotion || blackPromotion) {
      return { ...move, type: MoveType.promotion };
    } else {
      return move;
    }
  });

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
      Math.abs(lastMove.piece.position - lastMove.move.square) === 20;
    const lastMovePawnRight =
      squareRight?.piece?.position === lastMove.move.square;
    const lastMovePawnLeft =
      squareLeft?.piece?.position === lastMove.move.square;

    if (correctColumn && lastMoveIsPawn && lastMovePawnMovedTwoSquares) {
      if (lastMovePawnLeft && squareForwardLeft) {
        moves.push({
          square: squareForwardLeft.square,
          type: MoveType.enPassant,
        });
      }
      if (lastMovePawnRight && squareForwardRight) {
        moves.push({
          square: squareForwardRight.square,
          type: MoveType.enPassant,
        });
      }
    }
  }

  return moves;
};
