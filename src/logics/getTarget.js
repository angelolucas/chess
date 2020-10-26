const getSquare = ({ color = 'white', position, direction }) => {
  const white = color === 'white';

  return {
    'backward-left': white ? position - 11 : position + 11,
    backward: white ? position - 1 : position + 1,
    'backward-right': white ? position + 9 : position - 9,
    left: white ? position - 10 : position + 10,
    right: white ? position + 10 : position - 10,
    'forward-left': white ? position - 9 : position + 9,
    forward: white ? position + 1 : position - 1,
    'forward-right': white ? position + 11 : position - 11,
    'two-forward': white ? position + 2 : position - 2, // pawn
    'two-left-backward': white ? position - 21 : position + 21, // knight
    'two-left-forward': white ? position - 19 : position + 19, // knight
    'two-backward-left': white ? position - 12 : position + 12, // knight
    'two-forward-left': white ? position - 8 : position + 8, // knight
    'two-backward-right': white ? position + 8 : position - 8, // knight
    'two-forward-right': white ? position + 12 : position - 12, // knight
    'two-right-backward': white ? position + 19 : position - 19, // knight
    'two-right-forwad': white ? position + 21 : position - 21, // knight
  }[direction];
};

const getPiece = ({ square, pieces }) =>
  Object.values(pieces).find((piece) => piece.position === square)?.color;

export default ({ direction, piece: { color, position }, pieces }) => {
  const square = getSquare({ color, position, direction });
  const validSquare =
    square >= 11 && square <= 88 && square % 10 !== 0 && square % 10 !== 9;

  // Check if is a invalid square
  if (validSquare) {
    const piece = getPiece({ square, pieces });
    const enemy = piece && piece !== color;

    return {
      square,
      empty: !piece,
      enemy,
    };
  }

  return false;
};
