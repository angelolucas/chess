import { FILES, RANKS } from '../constants';
import { getLegalMovesBySquares } from '../utils';

export default ({
  selected: {
    file,
    rank,
    piece: { player },
  },
  pieces,
}) => {
  const rankIndex = rank;
  const fileIndex = FILES.indexOf(file) + 1;
  let squares = [];

  const loopSquares = ({ fileIndex, rankIndex }) => {
    if (FILES[fileIndex] && RANKS[rankIndex]) {
      console.log(`
      fileIndex: ${fileIndex}
      rankIndex: ${rankIndex}
      FILES[fileIndex]: ${FILES[fileIndex]}
      RANKS[rankIndex]: ${RANKS[rankIndex]}
      --------------------------------------
    `);
      squares.push({ file: FILES[fileIndex], rank: RANKS[rankIndex] });

      loopSquares({
        fileIndex: fileIndex + 1,
        rankIndex: rankIndex + 1,
      });
    }
  };
  loopSquares({ fileIndex: fileIndex, rankIndex: rankIndex });

  return [
    ...getLegalMovesBySquares({
      squares,
      player,
      pieces,
    }),
  ];
};
