import squareStatus from '../squareStatus';

const getDirection = ({ square, direction }) =>
  ({
    'backward-left': square - 11,
    backward: square - 10,
    'backward-right': square - 9,
    left: square - 1,
    right: square + 1,
    'forward-left': square + 9,
    forward: square + 10,
    'forward-right': square + 11,
  }[direction]);

export default ({ piece, pieces }) => {
  const legalMoves = [];

  const loopSquares = ({ square, direction }) => {
    const nextSquare = getDirection({ square, direction });
    const checkNextSquare = squareStatus({
      square: nextSquare,
      piece,
      pieces,
    });

    if (checkNextSquare.enemy) {
      legalMoves.push(nextSquare);
    } else if (checkNextSquare.empty) {
      legalMoves.push(nextSquare);
      loopSquares({ square: nextSquare, direction });
    }
  };

  if (['rook', 'queen'].includes(piece.type)) {
    loopSquares({ square: piece.position, direction: 'left' });
    loopSquares({ square: piece.position, direction: 'backward' });
    loopSquares({ square: piece.position, direction: 'forward' });
    loopSquares({ square: piece.position, direction: 'right' });
  }

  if (['bishop', 'queen'].includes(piece.type)) {
    loopSquares({ square: piece.position, direction: 'backward-left' });
    loopSquares({ square: piece.position, direction: 'forward-left' });
    loopSquares({ square: piece.position, direction: 'backward-right' });
    loopSquares({ square: piece.position, direction: 'forward-right' });
  }

  return legalMoves;
};
