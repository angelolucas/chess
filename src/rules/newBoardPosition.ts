import { Move, Piece } from '@/types/app.types';
import { legalMoves } from './legalMoves';

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

  // Remove taked piece
  newBoardPosition = newBoardPosition.filter((piece) => {
    return piece.position !== move.square;
  });

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
