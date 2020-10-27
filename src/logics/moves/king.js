import getTarget from '../getTarget';
import legalMoves from './legalMoves';

export default ({ piece: { color, position }, pieces, player }) => {
  const directions = [
    'backward-left',
    'left',
    'forward-left',
    'backward',
    'forward',
    'backward-right',
    'right',
    'forward-right',
  ];
  const moves = directions.reduce((squares, direction) => {
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

  return legalMoves({ moves, piece: { color, position }, pieces, player });
};
