import getPieceBySquare from './getPieceBySquare';

export default ({ square, piece, pieces }) => {
  if (square < 1 || square > 64) return false;

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
