import getTarget from '../getTarget';

export default ({ piece: { color, position }, pieces }) => {
  const moves = [
    'backward-left',
    'left',
    'forward-left',
    'backward',
    'forward',
    'backward-right',
    'right',
    'forward-right',
  ];

  return moves.reduce((squares, direction) => {
    const target = getTarget({
      direction,
      piece: { color, position },
      pieces,
    });

    if (target.empty || target.enemy) {
      squares.push(target.square);
    }

    return squares;
  }, []);
};
