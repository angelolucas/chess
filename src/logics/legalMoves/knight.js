import checkSquare from '../checkSquare';

export default ({ piece, pieces }) => {
  let moves = [
    piece.square - 21,
    piece.square - 19,
    piece.square - 12,
    piece.square - 8,
    piece.square + 8,
    piece.square + 12,
    piece.square + 19,
    piece.square + 21,
  ];

  moves = moves.filter((square) => {
    square = checkSquare({ square, piece, pieces });

    return square.empty || square.enemy;
  });

  return moves;
};
