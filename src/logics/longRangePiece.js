import { BOARD_SQUARES } from '../constants';

export default ({ piece, pieces }) => {
  const legalMoves = [];

  const loopSquares = (square) => {
    const nextSquare = [square[0] + 1, square[1] + 1];
    const nextSquareExists =
      nextSquare[0] <= BOARD_SQUARES && nextSquare[1] <= BOARD_SQUARES;

    if (nextSquareExists) {
      legalMoves.push(nextSquare);
      loopSquares(nextSquare);
    }
  };

  loopSquares(piece.square);

  return legalMoves;
};
