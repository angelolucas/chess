import squareExists from 'utils/squareExists';

export default ({ piece, pieces }) => {
  const file = piece.square[0];
  const rank = piece.square[1];
  const moves = [
    [file, rank + 1],
    [file + 1, rank + 1],
    [file + 1, rank],
    [file + 1, rank - 1],
    [file, rank - 1],
    [file - 1, rank - 1],
    [file - 1, rank],
    [file - 1, rank + 1],
  ];

  return moves.filter((move) => squareExists(move));
};
