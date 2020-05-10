import forward from "./forward";

export default ({ selected, pieces }) => {
  let legalMoves = [];

  // forward
  if (["rook", "queen"].includes(selected.piece.type)) {
    legalMoves = [...legalMoves, ...forward({ selected, pieces })];
  }

  return legalMoves;
};
