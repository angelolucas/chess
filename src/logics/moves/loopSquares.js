import getTarget from '../getTarget';

export default ({ directions, piece: { color, position }, pieces, player }) => {
  let moves = [];

  const loopSquaresByDirection = ({ direction, position }) => {
    const target = getTarget({
      direction,
      piece: { color, position },
      pieces,
    });

    if (target.enemy) {
      moves.push(target.square);
    } else if (target.empty) {
      moves.push(target.square);
      loopSquaresByDirection({ direction, position: target.square });
    }
  };

  directions.forEach((direction) =>
    loopSquaresByDirection({
      direction,
      position,
    })
  );

  return moves;
};
