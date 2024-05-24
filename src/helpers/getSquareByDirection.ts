import { Direction, Piece, Player } from '@/types/app.types';

interface getSquareByDirection {
  direction: Direction;
  piece: Piece;
}

export const getSquareByDirection = ({
  direction,
  piece,
}: getSquareByDirection) => {
  const directionValue = piece.player === Player.black ? -direction : direction;
  const square = piece.position + directionValue;
  const validSquare =
    square >= 11 && square <= 88 && square % 10 !== 0 && square % 10 !== 9;

  return validSquare ? square : null;
};
