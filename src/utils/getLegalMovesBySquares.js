import { getPieceBySquare } from '../utils';

export default ({ player, squares, pieces }) => {
  let legalMoves = [];

  for (const { file, rank } of squares) {
    const piece = getPieceBySquare({ rank, file, pieces });

    if (piece) {
      const ownPiece = piece.player === player;

      if (ownPiece) {
        break;
      } else {
        legalMoves.push({ rank, file });
        break;
      }
    } else {
      legalMoves.push({ rank, file });
    }
  }

  return legalMoves;
};
