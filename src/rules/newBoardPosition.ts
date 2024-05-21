import { Move, Piece } from '@/types/app.types';

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
    return piece.position !== move;
  });

  return newBoardPosition;
};
