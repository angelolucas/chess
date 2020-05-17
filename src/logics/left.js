import { FILES } from '../constants';
import { getPieceBySquare } from '../utils';

export default ({ selected, pieces }) => {
  const position = FILES.indexOf(selected.file);
  const files = FILES.slice(0, position).reverse();
  const rank = selected.rank;
  let legalMoves = [];

  for (const file of files) {
    const piece = getPieceBySquare({ rank, file, pieces });

    if (piece) {
      const ownPiece = piece.player === selected.piece.player;

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
