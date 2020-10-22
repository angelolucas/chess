import squareStatus from 'logics/squareStatus';
import getSquare from '../getSquare';

export default ({ piece: { player, moved, position }, pieces }) => {
  const squareAhead = getSquare({ direction: 'forward', player, position });
  const statusSquareAhead = squareStatus({
    square: squareAhead,
    player,
    pieces,
  });
  const squareForwardLeft = getSquare({
    direction: 'forward-left',
    player,
    position,
  });
  const statusSquareForwardLeft = squareStatus({
    square: squareForwardLeft,
    player,
    pieces,
  });
  const squareForwardRight = getSquare({
    direction: 'forward-right',
    player,
    position,
  });
  const statusSquareForwardRight = squareStatus({
    square: squareForwardRight,
    player,
    pieces,
  });
  const moves = [];

  if (statusSquareAhead.empty) {
    const twoSquaresAhead = getSquare({
      direction: 'two-forward',
      player,
      position,
    });
    const statusTwoSquaresAhead = squareStatus({
      square: twoSquaresAhead,
      player,
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
