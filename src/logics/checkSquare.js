import getPieceBySquare from './getPieceBySquare';

const squareExists = (square) => {
  const fileExists = square[0] >= 0 && square[0] <= 7;
  const rankExists = square[1] >= 0 && square[1] <= 7;

  return fileExists && rankExists;
};

export default ({ square, piece, pieces }) => {
  const thisExists = squareExists(square);

  if (!thisExists) return false;

  const getPiece = getPieceBySquare({ square, pieces });
  const empty = !getPiece;
  const own = getPiece && getPiece === piece.player;
  const enemy = getPiece && getPiece !== piece.player;

  return {
    empty,
    own,
    enemy,
  };
};
