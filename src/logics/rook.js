import { loopSquares } from 'utils';

export default ({
  selected: {
    file,
    rank,
    piece: { player },
  },
  pieces,
}) => [
  ...loopSquares({
    index: { file, rank },
    direction: { file: 'forward' },
    pieces,
    player,
  }),
  ...loopSquares({
    index: { file, rank },
    direction: { file: 'backward' },
    pieces,
    player,
  }),
  ...loopSquares({
    index: { file, rank },
    direction: { rank: 'forward' },
    pieces,
    player,
  }),
  ...loopSquares({
    index: { file, rank },
    direction: { rank: 'backward' },
    pieces,
    player,
  }),
];
