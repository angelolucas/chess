import { getTargetByDirection } from '@/helpers/getTargetByDirection';
import { Direction, Move, MoveType, Piece } from '@/types/app.types';

interface BishopMoves {
  piece: Piece;
  boardPosition: Piece[];
}

export const bishopMoves = ({ piece, boardPosition }: BishopMoves) => {
  const moves: Move[] = [];

  const bishopDirections = [
    Direction.forwardLeft,
    Direction.forwardRight,
    Direction.backwardLeft,
    Direction.backwardRight,
  ];

  bishopDirections.forEach((direction) => {
    let targetSquare = getTargetByDirection({
      direction,
      boardPosition,
      piece,
    });

    while (targetSquare) {
      if (!targetSquare.piece) {
        moves.push({ square: targetSquare.square, type: MoveType.move });
      } else {
        if (targetSquare.opponent) {
          moves.push({ square: targetSquare.square, type: MoveType.capture });
        }
        break; // Stop if there's a piece in the way
      }

      // Move to the next square in the same direction
      targetSquare = getTargetByDirection({
        direction,
        boardPosition,
        piece: { ...piece, position: targetSquare.square },
      });
    }
  });

  return moves;
};
