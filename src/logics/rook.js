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
  const fileIndex = FILES.indexOf(file);
  const forwardSquares = RANKS.slice(rankIndex).map((rank) => ({ file, rank }));
  const backwardSquares = RANKS.slice(0, rankIndex - 1)
    .reverse()
    .map((rank) => ({ file, rank }));
  const leftSquares = FILES.slice(0, fileIndex)
    .reverse()
    .map((file) => ({ file, rank }));
  const rightSquares = FILES.slice(fileIndex + 1).map((file) => ({
    file,
    rank,
  }));

  return [
    ...getLegalMovesBySquares({ squares: forwardSquares, player, pieces }),
    ...getLegalMovesBySquares({ squares: backwardSquares, player, pieces }),
    ...getLegalMovesBySquares({ squares: leftSquares, player, pieces }),
    ...getLegalMovesBySquares({ squares: rightSquares, player, pieces }),
  ];
};
