import checkSquare from '../logics/checkSquare';

export default ({ piece, pieces }) => {
  const file = piece.square[0];
  const rank = piece.square[1];
  let moves = [];

  if (piece.player === 'white') {
    moves.push([file, rank - 1]);

    if (!piece.moved) {
      moves.push([file, rank - 2]);
    }
  }

  if (piece.player === 'black') {
    moves.push([file, rank + 1]);

    if (!piece.moved) {
      moves.push([file, rank + 2]);
    }
  }

  return moves.filter((square) => {
    square = checkSquare({ square, piece, pieces });

    return square.empty;
  });
};
