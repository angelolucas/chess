import squareExists from '../logics/squareExists';

export default ({ piece, pieces }) => {
  const file = piece.square[0];
  const rank = piece.square[1];
  const moves =
    piece.player === 'white' ? [[file, rank - 1]] : [[file, rank + 1]];

  return moves.filter((square) => squareExists(square));
};
