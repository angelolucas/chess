import squareStatus from 'logics/squareStatus';
import getPieceBySquare from 'logics/getPieceBySquare';

const getMove = ({ move, piece: { player, position } }) => {
  if (move === 'one-ahead') {
    return player === 'white' ? position + 1 : position - 1;
  }
  if (move === 'two-ahead') {
    return player === 'white' ? position + 2 : position - 2;
  }
};

export default ({ piece, pieces }) => {
  let movesToCheck = [];

  const pieceAhead = getPieceBySquare({
    square: getMove({ move: 'one-ahead', piece }),
    pieces,
  });
  const moved = piece.moved;

  movesToCheck.push(getMove({ move: 'one-ahead', piece }));

  if (!moved && !pieceAhead) {
    movesToCheck.push(getMove({ move: 'two-ahead', piece }));
  }

  return movesToCheck.filter((square) => {
    square = squareStatus({ square, piece, pieces });

    return square.empty;
  });
};
