import checkSquare from '../checkSquare';

export default ({ piece, pieces }) => {
  let moves = [];

  if (piece.player === 'white') {
    moves.push(piece.square - 10);

    if (!piece.moved) {
      moves.push(piece.square - 20);
    }
  }

  if (piece.player === 'black') {
    moves.push(piece.square + 10);

    if (!piece.moved) {
      moves.push(piece.square + 20);
    }
  }

  return moves.filter((square) => {
    square = checkSquare({ square, piece, pieces });

    return square.empty;
  });
};
