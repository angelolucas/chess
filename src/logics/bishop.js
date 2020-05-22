import { FILES, RANKS } from '../constants';
import { getLegalMovesBySquares, loopSquares } from '../utils';

export default ({
  selected: {
    file,
    rank,
    piece: { player },
  },
  pieces,
}) => {
  const forwardRightSquares = loopSquares({
    index: { file, rank },
    direction: { file: 'forward', rank: 'forward' },
  });
  const forwardLeftSquares = loopSquares({
    index: { file, rank },
    direction: { file: 'backward', rank: 'forward' },
  });
  const backwardLeftSquares = loopSquares({
    index: { file, rank },
    direction: { file: 'backward', rank: 'backward' },
  });
  const backwardRightSquares = loopSquares({
    index: { file, rank },
    direction: { file: 'forward', rank: 'backward' },
  });

  return [
    ...getLegalMovesBySquares({
      squares: forwardRightSquares,
      player,
      pieces,
    }),
    ...getLegalMovesBySquares({
      squares: forwardLeftSquares,
      player,
      pieces,
    }),
    ...getLegalMovesBySquares({
      squares: backwardLeftSquares,
      player,
      pieces,
    }),
    ...getLegalMovesBySquares({
      squares: backwardRightSquares,
      player,
      pieces,
    }),
  ];
};
