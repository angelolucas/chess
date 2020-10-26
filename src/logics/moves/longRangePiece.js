import getTarget from '../getTarget';

export default ({ piece: { color, position, type }, pieces }) => {
  const moves = [];

  const loopSquares = ({ position, direction }) => {
    const target = getTarget({
      direction,
      piece: { color, position },
      pieces,
    });

    if (target.enemy) {
      moves.push(target.square);
    } else if (target.empty) {
      moves.push(target.square);
      loopSquares({ position: target.square, direction });
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
