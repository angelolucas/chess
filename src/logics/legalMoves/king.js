import checkSquare from '../checkSquare';

export default ({ piece, pieces }) => {
  const moves = [
    piece.square - 10,
    piece.square - 9,
    piece.square + 1,
    piece.square + 11,
    piece.square + 10,
    piece.square + 9,
    piece.square - 1,
    piece.square - 11,
  ];

  return moves.filter((square) => {
    square = checkSquare({ square, piece, pieces });

    return square.empty || square.enemy;
  });
};
