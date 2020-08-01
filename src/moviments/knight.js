import squareExists from 'utils/squareExists';

export default ({ piece, pieces }) => {
  const moves = [
    [piece.square[0] + 1, piece.square[1] - 2],
    [piece.square[0] + 2, piece.square[1] - 1],
    [piece.square[0] + 2, piece.square[1] + 1],
    [piece.square[0] + 1, piece.square[1] + 2],
    [piece.square[0] - 1, piece.square[1] + 2],
    [piece.square[0] - 2, piece.square[1] + 1],
    [piece.square[0] - 2, piece.square[1] - 1],
    [piece.square[0] - 1, piece.square[1] - 2],
  ];
  return moves.filter((move) => squareExists(move));
};
