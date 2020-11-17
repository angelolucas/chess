import loopSquares from './loopSquares';

export default ({ piece: { color, position }, pieces }) =>
  loopSquares({
    directions: ['forward', 'left', 'right', 'backward'],
    piece: { color, position },
    pieces,
  });
