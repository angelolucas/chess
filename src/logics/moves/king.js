import squareStatus from '../squareStatus';

export default ({ piece: { position, color }, pieces }) => {
  let moves = [
    position - 11, // backward-left
    position - 10, // left
    position - 9, // forward-left
    position - 1, // backward
    position + 1, // forward
    position + 9, // backward-right
    position + 10, // right
    position + 11, // forward-right
  ];

  moves = moves.filter((square) => {
    square = squareStatus({ square, player: color, pieces });

    return square.empty || square.enemy;
  });

  return moves;
};
