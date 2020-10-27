import loopSquares from './loopSquares';

export default ({ piece: { color, position }, pieces }) =>
  loopSquares({
    directions: [
      'forward',
      'left',
      'right',
      'backward',
      'backward-left',
      'forward-left',
      'backward-right',
      'forward-right',
    ],
    piece: { color, position },
    pieces,
  });
