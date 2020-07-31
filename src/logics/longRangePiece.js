import squareExists from 'utils/squareExists';

const getDirection = ({ square, direction }) => {
  let output = square.slice();

  if (direction[0] === 'forward') {
    output[0]++;
  } else if (direction[0] === 'backward') {
    output[0]--;
  }
  if (direction[1] === 'forward') {
    output[1]++;
  } else if (direction[1] === 'backward') {
    output[1]--;
  }

  return output;
};

export default ({ piece, pieces }) => {
  const legalMoves = [];

  const loopSquares = ({ square, direction }) => {
    const nextSquare = getDirection({ square, direction });
    const nextSquareExists = squareExists(nextSquare);

    if (nextSquareExists) {
      legalMoves.push(nextSquare);
      loopSquares({ square: nextSquare, direction });
    }
  };

  if (['rook', 'queen'].includes(piece.type)) {
    loopSquares({ square: piece.square, direction: ['forward'] });
    loopSquares({ square: piece.square, direction: ['backward'] });
    loopSquares({ square: piece.square, direction: [null, 'backward'] });
    loopSquares({ square: piece.square, direction: [null, 'forward'] });
  }

  if (['bishop', 'queen'].includes(piece.type)) {
    loopSquares({ square: piece.square, direction: ['forward', 'forward'] });
    loopSquares({ square: piece.square, direction: ['forward', 'backward'] });
    loopSquares({ square: piece.square, direction: ['backward', 'backward'] });
    loopSquares({ square: piece.square, direction: ['backward', 'forward'] });
  }

  return legalMoves;
};
