const legalMoves = [
  [0, 0],
  [0, 7],
  [7, 0],
  [7, 7],
];

export default (pieces) =>
  pieces.map((piece) => ({
    ...piece,
    legalMoves,
  }));
