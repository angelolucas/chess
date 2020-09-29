import squareExists from './squareExists';
import getPieceBySquare from './getPieceBySquare';

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
