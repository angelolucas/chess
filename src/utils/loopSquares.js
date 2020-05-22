import { FILES, RANKS } from '../constants';

const next = ({ index, direction }) => {
  let output = { file: index.file, rank: index.rank };

  if (direction.file === 'forward') {
    output.file++;
  } else if (direction.file === 'backward') {
    output.file--;
  }
  if (direction.rank === 'forward') {
    output.rank++;
  } else if (direction.rank === 'backward') {
    output.rank--;
  }

  return output;
};

export default ({ index, direction }) => {
  let squares = [];

  const loopSquares = ({ index, direction }) => {
    const nextSquare = next({ index, direction });

    if (FILES.includes(nextSquare.file) && RANKS.includes(nextSquare.rank)) {
      console.log(nextSquare, 'entrou');
      squares.push({ file: nextSquare.file, rank: nextSquare.rank });

      loopSquares({
        index: {
          file: nextSquare.file,
          rank: nextSquare.rank,
        },
        direction,
      });
    }
  };

  loopSquares({
    index,
    direction,
  });

  return squares;
};
