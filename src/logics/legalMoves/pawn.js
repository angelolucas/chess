import squareStatus from 'logics/squareStatus';

const getMove = ({ move, piece: { player, position } }) => {
  if (move === 'one-ahead') {
    return player === 'white' ? position + 1 : position - 1;
  }
  if (move === 'two-ahead') {
    return player === 'white' ? position + 2 : position - 2;
  }
  if (move === 'take-right') {
    return player === 'white' ? position + 11 : position - 11;
  }
  if (move === 'take-left') {
    return player === 'white' ? position - 9 : position + 9;
  }
};

export default ({ piece, pieces }) => {
  const squareAhead = getMove({ move: 'one-ahead', piece });
  const statusSquareAhead = squareStatus({
    square: squareAhead,
    pieces,
  });
  let moves = [];

  if (statusSquareAhead.empty) {
    const twoSquaresAhead = getMove({ move: 'two-ahead', piece });
    const statusTwoSquaresAhead = squareStatus({
      square: twoSquaresAhead,
      pieces,
    });

    moves.push(squareAhead);

    if (!piece.moved && statusTwoSquaresAhead.empty) {
      moves.push(twoSquaresAhead);
    }
  }

  return moves;
};
