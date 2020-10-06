import checkSquare from '../checkSquare';

export default ({ piece, pieces }) => {
  let moves = [];

  if (piece.player === 'white') {
    moves.push(piece.square + 1);

    if (!piece.moved) {
      moves.push(piece.square + 2);
    }
  }

  if (piece.player === 'black') {
    moves.push(piece.square - 1);

    if (!piece.moved) {
      moves.push(piece.square - 2);
    }
  }

  return moves.filter((square) => {
    square = checkSquare({ square, piece, pieces });

    return square.empty;
  });
};
