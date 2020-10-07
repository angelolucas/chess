import checkSquare from '../checkSquare';

export default ({ piece, pieces }) => {
  let moves = [
    piece.position - 21,
    piece.position - 19,
    piece.position - 12,
    piece.position - 8,
    piece.position + 8,
    piece.position + 12,
    piece.position + 19,
    piece.position + 21,
  ];

  moves = moves.filter((square) => {
    square = checkSquare({ square, piece, pieces });

    return square.empty || square.enemy;
  });

  return moves;
};
