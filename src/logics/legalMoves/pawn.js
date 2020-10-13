import squareStatus from 'logics/squareStatus';

const getMove = ({ move, piece: { player, position } }) =>
  ({
    forward: player === 'white' ? position + 1 : position - 1,
    'two-forward': player === 'white' ? position + 2 : position - 2,
    'forward-left': player === 'white' ? position - 9 : position + 9,
    'forward-right': player === 'white' ? position + 11 : position - 11,
  }[move]);

export default ({ piece, pieces }) => {
  const squareAhead = getMove({ move: 'forward', piece });
  const statusSquareAhead = squareStatus({
    square: squareAhead,
    player: piece.player,
    pieces,
  });
  const squareForwardLeft = getMove({ move: 'forward-left', piece });
  const statusSquareForwardLeft = squareStatus({
    square: squareForwardLeft,
    player: piece.player,
    pieces,
  });
  const squareForwardRight = getMove({ move: 'forward-right', piece });
  const statusSquareForwardRight = squareStatus({
    square: squareForwardRight,
    player: piece.player,
    pieces,
  });
  let moves = [];

  if (statusSquareAhead.empty) {
    const twoSquaresAhead = getMove({ move: 'two-forward', piece });
    const statusTwoSquaresAhead = squareStatus({
      square: twoSquaresAhead,
      player: piece.player,
      pieces,
    });

    moves.push(squareAhead);

    if (!piece.moved && statusTwoSquaresAhead.empty) {
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
