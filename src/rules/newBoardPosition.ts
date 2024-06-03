import { Direction, Move, MoveType, Piece } from '@/types/app.types';
import { legalMoves } from './legalMoves';
import { getSquareByDirection } from '@/helpers/getSquareByDirection';

interface NewBoardPositionProps {
  piece: Piece;
  move: Move;
  boardPosition: Piece[];
}

export const newBoardPosition = ({
  piece,
  move,
  boardPosition,
}: NewBoardPositionProps) => {
  let newBoardPosition = [...boardPosition];

  // Capture piece
  if (move.type === MoveType.capture) {
    newBoardPosition = newBoardPosition.filter((piece) => {
      return piece.position !== move.square;
    });
  }

  // En passant
  if (move.type === MoveType.enPassant) {
    const squareOpponentPawn = getSquareByDirection({
      direction: Direction.backward,
      player: piece.player,
      position: move.square,
    });

    newBoardPosition = newBoardPosition.filter((currentPiece) => {
      return currentPiece.position !== squareOpponentPawn;
    });
  }

  // Move pieces
  newBoardPosition = newBoardPosition.map((currentPiece) => {
    if (currentPiece.id === piece.id) {
      return {
        ...currentPiece,
        moved: true,
        position: move.square,
      };
    }

    return currentPiece;
  });

  // Update legal moves
  newBoardPosition = newBoardPosition.map((currentPiece) => ({
    ...currentPiece,
    moves: legalMoves({
      piece: currentPiece,
      boardPosition: newBoardPosition,
      lastMove: { piece, move },
    }),
  }));

  return newBoardPosition;
};
