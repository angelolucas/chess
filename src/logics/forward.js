import { RANKS } from '../constants';
import { getPieceBySquare } from '../utils';

export default ({ selected, pieces }) => {
  const ranks = RANKS.slice(selected.rank);
  const file = selected.file;
  let legalMoves = [];

  for(const rank of ranks) {
    const piece = getPieceBySquare({file, rank, pieces });

    if (piece) {
      const ownPiece = piece.player === selected.piece.player

      if (ownPiece){
        break;
      } else {
        legalMoves.push({file, rank});
        break;
      }
    } else {
      legalMoves.push({file, rank});
    }
  }

  return legalMoves
};
