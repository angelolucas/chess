import checkSquare from '../checkSquare';

export default ({ piece, pieces }) => {
  const moves = [
    piece.square - 19,
    piece.square - 8,
    piece.square + 12,
    piece.square + 21,
    piece.square + 19,
    piece.square + 8,
    piece.square - 12,
    piece.square - 21,
  ];

  return moves.filter((square) => {
    square = checkSquare({ square, piece, pieces });

    return square.empty || square.enemy;
  });
};
