import getTarget from '../getTarget';

export default ({ piece: { color, position }, pieces }) => {
  const directions = [
    'two-left-backward',
    'two-left-forward',
    'two-backward-left',
    'two-forward-left',
    'two-backward-right',
    'two-forward-right',
    'two-right-backward',
    'two-right-forwad',
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
