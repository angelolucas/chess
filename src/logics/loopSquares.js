import { FILES, RANKS } from 'constants.js';
import getPieceBySquare from '../utils/getPieceBySquare';

const next = ({ index, direction }) => {
  let output = { file: index.file, rank: index.rank };

  if (direction.file === 'forward') {
    output.file++;
  } else if (direction.file === 'backward') {
    output.file--;
  }
  if (direction.rank === 'forward') {
    output.rank++;
  } else if (direction.rank === 'backward') {
    output.rank--;
  }

  return output;
};

export default ({ index, direction, pieces, player }) => {
  let legalMoves = [];

  const loopSquares = ({ index, direction }) => {
    const { file, rank } = next({ index, direction });

    if (FILES.includes(file) && RANKS.includes(rank)) {
      const piece = getPieceBySquare({ file, rank, pieces });

      if (piece) {
        const enemyPiece = piece.player !== player;

        if (enemyPiece) {
          legalMoves.push({ file, rank });
        }
      } else {
        legalMoves.push({ file, rank });

        loopSquares({
          index: { file, rank },
          direction,
        });
      }
    }
  };

  loopSquares({
    index,
    direction,
  });

  return legalMoves;
};
