import { getPiece } from './getPiece';
import { getSquareByDirection } from './getSquareByDirection';

export default ({ direction, piece: { color, position }, pieces, options }) => {
  const square = getSquareByDirection({ color, position, direction });
  const validSquare =
    square >= 11 && square <= 88 && square % 10 !== 0 && square % 10 !== 9;

  // Check if is a invalid square
  if (validSquare) {
    const piece = getPiece({ square, pieces });
    const enemy = piece && piece.color !== color;
    const target = {
      square,
      empty: !piece,
      enemy,
    };

    if (options?.underAttack) {
      const underAttack = pieces.find(
        (piece) => piece.moves && piece.moves.includes(square)
      );

      return {
        ...target,
        underAttack,
      };
    }

    return target;
  }

  return false;
};
