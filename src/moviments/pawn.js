import checkSquare from '../logics/checkSquare';

export default ({ piece, pieces }) => {
  const file = piece.square[0];
  const rank = piece.square[1];
  let moves = [];

  if (piece.player === 'white') {
    const square = [file, rank - 1];

    if (checkSquare({ square, piece, pieces }).empty) {
      moves.push(square);
    }
  }

  if (piece.player === 'black') {
    const square = [file, rank + 1];

    if (checkSquare({ square, piece, pieces }).empty) {
      moves.push(square);
    }
  }

  if (!piece.moved && piece.player === 'white') {
    const square = [file, rank - 2];

    if (checkSquare({ square, piece, pieces }).empty) {
      moves.push(square);
    }
  }

  if (!piece.moved && piece.player === 'black') {
    const square = [file, rank + 2];

    if (checkSquare({ square, piece, pieces }).empty) {
      moves.push(square);
    }
  }

  return moves.filter((square) => {
    square = checkSquare({ square, piece, pieces });

    return square.empty || square.enemy;
  });
};
