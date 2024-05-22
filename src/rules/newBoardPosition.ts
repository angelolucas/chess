import { Piece } from '@/types/app.types';
import { legalMoves } from './legalMoves';

interface NewBoardPositionProps {
  piece: Piece;
  move: number;
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
    return piece.position !== move;
  });

  // Move pieces
  newBoardPosition = newBoardPosition.map((item) => {
    if (item.id === piece.id) {
      return {
        ...piece,
        moved: true,
        position: move,
      };
    }

    return item;
  });

  // Update legal moves
  newBoardPosition = newBoardPosition.map((piece) => ({
    ...piece,
    moves: legalMoves({
      piece,
      boardPosition: newBoardPosition,
    }),
  }));

  return newBoardPosition;
};
