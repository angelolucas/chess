import getPieceBySquare from './getPieceBySquare';

export default ({ square, piece, pieces }) => {
  // Check if is a invalid square
  if (square < 11 || square > 88 || square % 10 === 0 || square % 10 === 9)
    return false;

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
