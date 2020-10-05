import checkSquare from '../checkSquare';

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
    const checkNextSquare = checkSquare({
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
    loopSquares({ square: piece.square, direction: 'backward' });
    loopSquares({ square: piece.square, direction: 'left' });
    loopSquares({ square: piece.square, direction: 'right' });
    loopSquares({ square: piece.square, direction: 'forward' });
  }

  if (['bishop', 'queen'].includes(piece.type)) {
    loopSquares({ square: piece.square, direction: 'backward-left' });
    loopSquares({ square: piece.square, direction: 'backward-right' });
    loopSquares({ square: piece.square, direction: 'forward-left' });
    loopSquares({ square: piece.square, direction: 'forward-right' });
  }

  return legalMoves;
};
