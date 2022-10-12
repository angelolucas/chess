import getTarget from '../getTarget';

export default ({ piece: { color, position }, pieces }) => {
  const directions = [
    'backward-left',
    'left',
    'forward-left',
    'backward',
    'forward',
    'backward-right',
    'right',
    'forward-right',
    'two-right',
    'two-left',
  ];

  return directions.reduce((squares, direction) => {
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
