export const getPiece = ({ square, pieces }) =>
  Object.values(pieces).find((piece) => piece.position === square);
