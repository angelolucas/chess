import { getPieceBySquare } from '../utils';

export default ({ player, squares, pieces }) => {
  let legalMoves = [];

  for (const { file, rank } of squares) {
    const piece = getPieceBySquare({ file, rank, pieces });

    if (piece) {
      const ownPiece = piece.player === player;

      if (ownPiece) {
        break;
      } else {
        legalMoves.push({ file, rank });
        break;
      }
    } else {
      legalMoves.push({ file, rank });
    }
  }

  return legalMoves;
};
