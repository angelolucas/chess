export default ({ square, pieces }) =>
  Object.values(pieces).find((piece) => piece.square === square)?.player;
