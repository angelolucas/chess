export default ({ square, pieces }) =>
  Object.values(pieces).find((piece) => piece.position === square)?.player;
