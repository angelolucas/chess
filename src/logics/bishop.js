import loopSquares from './loopSquares';

export default ({ player, selected: { file, rank }, pieces }) => [
  ...loopSquares({
    index: { file, rank },
    direction: { file: 'forward', rank: 'forward' },
    pieces,
    player,
  }),
  ...loopSquares({
    index: { file, rank },
    direction: { file: 'backward', rank: 'forward' },
    pieces,
    player,
  }),
  ...loopSquares({
    index: { file, rank },
    direction: { file: 'backward', rank: 'backward' },
    pieces,
    player,
  }),
  ...loopSquares({
    index: { file, rank },
    direction: { file: 'forward', rank: 'backward' },
    pieces,
    player,
  }),
];
