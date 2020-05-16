import forward from "./forward";
import backward from "./backward";

export default ({ selected, pieces }) => {
  let legalMoves = [];

  // forward
  if (["rook", "queen"].includes(selected.piece.type)) {
    legalMoves = [...legalMoves, ...forward({ selected, pieces })];
    legalMoves = [...legalMoves, ...backward({ selected, pieces })];
  }

  return legalMoves;
};
