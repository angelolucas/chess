export const getSquareByDirection = ({
  color = 'white',
  position,
  direction,
}) => {
  const white = color === 'white';

  return {
    // Straight moves
    forward: white ? position + 1 : position - 1,
    left: white ? position - 10 : position + 10,
    right: white ? position + 10 : position - 10,
    backward: white ? position - 1 : position + 1,

    // Diagonal moves
    'backward-left': white ? position - 11 : position + 11,
    'backward-right': white ? position + 9 : position - 9,
    'forward-left': white ? position - 9 : position + 9,
    'forward-right': white ? position + 11 : position - 11,

    // Two squares jump of pawn
    'two-forward': white ? position + 2 : position - 2,

    // Castles
    'two-right': white ? position + 20 : position - 20,
    'two-left': white ? position - 20 : position + 20,

    // Knight moves
    'two-left-backward': white ? position - 21 : position + 21,
    'two-left-forward': white ? position - 19 : position + 19,
    'two-backward-left': white ? position - 12 : position + 12,
    'two-forward-left': white ? position - 8 : position + 8,
    'two-backward-right': white ? position + 8 : position - 8,
    'two-forward-right': white ? position + 12 : position - 12,
    'two-right-backward': white ? position + 19 : position - 19,
    'two-right-forwad': white ? position + 21 : position - 21,
  }[direction];
};

export const getPiece = ({ square, pieces }) =>
  Object.values(pieces).find((piece) => piece.position === square);

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
