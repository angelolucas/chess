import { Direction, Piece, Player } from '@/types/app.types';

interface getSquareByDirection {
  direction: Direction;
  boardPosition: Piece[];
  piece: Piece;
}

export const getSquareByDirection = ({
  direction,
  boardPosition,
  piece,
}: getSquareByDirection) => {
  const directionValue = piece.player === Player.black ? -direction : direction;
  const square = piece.position + directionValue;
  const validSquare =
    square >= 11 && square <= 88 && square % 10 !== 0 && square % 10 !== 9;
  const targetPiece = boardPosition.find((item) => item.position === square);

  if (validSquare) {
    return {
      square: square,
      piece: targetPiece,
      enemy: targetPiece && targetPiece?.player !== piece.player,
    };
  }
};
