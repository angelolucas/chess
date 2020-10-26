import getTarget from '../getTarget';

export default ({ piece: { color, moved, position }, pieces }) => {
  const squareAhead = getTarget({
    direction: 'forward',
    piece: { color, position },
    pieces,
  });
  const squareForwardLeft = getTarget({
    direction: 'forward-left',
    piece: { color, position },
    pieces,
  });
  const squareForwardRight = getTarget({
    direction: 'forward-right',
    piece: { color, position },
    pieces,
  });
  const moves = [];

  if (squareAhead.empty) {
    const twoSquaresAhead = getTarget({
      direction: 'two-forward',
      piece: { color, position },
      pieces,
    });

    moves.push(squareAhead.square);

    if (!moved && twoSquaresAhead.empty) {
      moves.push(twoSquaresAhead.square);
    }
  }
  if (squareForwardLeft.enemy) {
    moves.push(squareForwardLeft.square);
  }
  if (squareForwardRight.enemy) {
    moves.push(squareForwardRight.square);
  }

  return moves;
};
