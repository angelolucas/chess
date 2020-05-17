import forward from "./forward";
import backward from "./backward";
import left from "./left";
import right from "./right";

export default ({ selected, pieces }) => {
  let legalMoves = [];

  // forward
  if (["rook", "queen"].includes(selected.piece.type)) {
    legalMoves = [...legalMoves, ...forward({ selected, pieces })];
    legalMoves = [...legalMoves, ...backward({ selected, pieces })];
    legalMoves = [...legalMoves, ...left({ selected, pieces })];
    legalMoves = [...legalMoves, ...right({ selected, pieces })];
  }

  return legalMoves;
};
