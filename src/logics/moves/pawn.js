import getTarget from '../getTarget';
import legalMoves from './legalMoves';

export default ({ piece: { color, moved, position }, pieces, player }) => {
  const targetAhead = getTarget({
    direction: 'forward',
    piece: { color, position },
    pieces,
  });
  const targetForwardLeft = getTarget({
    direction: 'forward-left',
    piece: { color, position },
    pieces,
  });
  const targetForwardRight = getTarget({
    direction: 'forward-right',
    piece: { color, position },
    pieces,
  });
  const moves = [];

  if (targetAhead.empty) {
    const targetTwoForward = getTarget({
      direction: 'two-forward',
      piece: { color, position },
      pieces,
    });

    moves.push(targetAhead.square);

    if (!moved && targetTwoForward.empty) {
      moves.push(targetTwoForward.square);
    }
  }
  if (targetForwardLeft.enemy) {
    moves.push(targetForwardLeft.square);
  }
  if (targetForwardRight.enemy) {
    moves.push(targetForwardRight.square);
  }

  return legalMoves({ moves, piece: { color, position }, pieces, player });
};
