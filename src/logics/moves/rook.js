import loopSquares from './loopSquares';
import legalMoves from './legalMoves';

export default ({ piece: { color, position }, pieces, player }) => {
  const moves = loopSquares({
    directions: ['forward', 'left', 'right', 'backward'],
    piece: { color, position },
    pieces,
    player,
  });

  return legalMoves({ moves, piece: { color, position }, pieces, player });
};
