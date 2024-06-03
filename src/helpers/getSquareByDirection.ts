import { Direction, Player } from '@/types/app.types';

interface getSquareByDirection {
  direction: Direction;
  player: Player;
  position: number;
}

export const getSquareByDirection = ({
  direction,
  player,
  position,
}: getSquareByDirection) => {
  const directionValue = player === Player.black ? -direction : direction;
  const square = position + directionValue;
  const validSquare =
    square >= 11 && square <= 88 && square % 10 !== 0 && square % 10 !== 9;

  return validSquare ? square : null;
};
