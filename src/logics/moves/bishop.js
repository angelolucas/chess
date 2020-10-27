import loopSquares from './loopSquares';

export default ({ piece: { color, position }, pieces }) =>
  loopSquares({
    directions: [
      'backward-left',
      'forward-left',
      'backward-right',
      'forward-right',
    ],
    piece: { color, position },
    pieces,
  });
