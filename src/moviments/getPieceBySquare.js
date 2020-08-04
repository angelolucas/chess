export default ({ square, pieces }) =>
  Object.values(pieces).find(
    (piece) => piece.square[0] === square[0] && piece.square[1] === square[1]
  );
