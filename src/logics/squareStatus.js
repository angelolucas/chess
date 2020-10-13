const getPieceBySquare = ({ square, pieces }) =>
  Object.values(pieces).find((piece) => piece.position === square)?.player;

export default ({ square, player, pieces }) => {
  // Check if is a invalid square
  if (square < 11 || square > 88 || square % 10 === 0 || square % 10 === 9)
    return false;

  const getPiece = getPieceBySquare({ square, pieces });
  const empty = !getPiece;
  const own = getPiece && getPiece === player;
  const enemy = getPiece && getPiece !== player;

  return {
    empty,
    own,
    enemy,
  };
};
