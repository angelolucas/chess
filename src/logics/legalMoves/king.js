import squareStatus from '../squareStatus';

export default ({ piece, pieces }) => {
  let moves = [
    piece.position - 11,
    piece.position - 10,
    piece.position - 9,
    piece.position - 1,
    piece.position + 1,
    piece.position + 9,
    piece.position + 10,
    piece.position + 11,
  ];

  moves = moves.filter((square) => {
    square = squareStatus({ square, piece, pieces });

    return square.empty || square.enemy;
  });

  return moves;
};
