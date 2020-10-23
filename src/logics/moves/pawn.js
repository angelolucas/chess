import squareStatus from 'logics/squareStatus';
import getSquare from '../getSquare';

export default ({ piece: { color, moved, position }, pieces }) => {
  const squareAhead = getSquare({
    direction: 'forward',
    player: color,
    position,
  });
  const statusSquareAhead = squareStatus({
    square: squareAhead,
    player: color,
    pieces,
  });
  const squareForwardLeft = getSquare({
    direction: 'forward-left',
    player: color,
    position,
  });
  const statusSquareForwardLeft = squareStatus({
    square: squareForwardLeft,
    player: color,
    pieces,
  });
  const squareForwardRight = getSquare({
    direction: 'forward-right',
    player: color,
    position,
  });
  const statusSquareForwardRight = squareStatus({
    square: squareForwardRight,
    player: color,
    pieces,
  });
  const moves = [];

  if (statusSquareAhead.empty) {
    const twoSquaresAhead = getSquare({
      direction: 'two-forward',
      player: color,
      position,
    });
    const statusTwoSquaresAhead = squareStatus({
      square: twoSquaresAhead,
      player: color,
      pieces,
    });

    moves.push(squareAhead);

    if (!moved && statusTwoSquaresAhead.empty) {
      moves.push(twoSquaresAhead);
    }
  }
  if (statusSquareForwardLeft.enemy) {
    moves.push(squareForwardLeft);
  }
  if (statusSquareForwardRight.enemy) {
    moves.push(squareForwardRight);
  }

  return moves;
};
