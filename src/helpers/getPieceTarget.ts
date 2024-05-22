import { Direction, Piece } from '@/types/app.types';
import { getSquareByDirection } from './getSquareByDirection';

interface GetPieceTarget {
  direction: Direction;
  piece: Piece;
  boardPosition: Piece[];
}

export const getPieceTarget = ({
  direction,
  piece,
  boardPosition,
}: GetPieceTarget) => {
  const square = getSquareByDirection({ piece, direction });

  return {
    square,
    piece: null,
  };
};
