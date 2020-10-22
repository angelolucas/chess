import squareStatus from '../squareStatus';
import getSquare from '../getSquare';

export default ({ piece: { player, position, type }, pieces }) => {
  const moves = [];

  const loopSquares = ({ position, direction }) => {
    const nextSquare = getSquare({ position, direction });
    const checkNextSquare = squareStatus({
      square: nextSquare,
      player,
      pieces,
    });

    if (checkNextSquare.enemy) {
      moves.push(nextSquare);
    } else if (checkNextSquare.empty) {
      moves.push(nextSquare);
      loopSquares({ position: nextSquare, direction });
    }
  };

  if (['rook', 'queen'].includes(type)) {
    loopSquares({ position, direction: 'left' });
    loopSquares({ position, direction: 'backward' });
    loopSquares({ position, direction: 'forward' });
    loopSquares({ position, direction: 'right' });
  }

  if (['bishop', 'queen'].includes(type)) {
    loopSquares({ position, direction: 'backward-left' });
    loopSquares({ position, direction: 'forward-left' });
    loopSquares({ position, direction: 'backward-right' });
    loopSquares({ position, direction: 'forward-right' });
  }

  return moves;
};
