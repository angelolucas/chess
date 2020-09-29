import checkSquare from '../logics/checkSquare';

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

  return moves.filter((square) => {
    square = checkSquare({ square, piece, pieces });

    return square.empty || square.enemy;
  });
};
